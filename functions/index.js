const {onObjectFinalized} = require("firebase-functions/v2/storage");
const {onCall} = require("firebase-functions/v2/https");
const admin = require("firebase-admin");
const { Storage } = require("@google-cloud/storage");
const os = require("os");
const path = require("path");
const fs = require("fs");
const ffmpegPath = require("ffmpeg-static");
const { spawn } = require("child_process");
const convert = require("color-convert");

admin.initializeApp();

const storage = new Storage();
const db = admin.firestore();

exports.generateSrcArray = onObjectFinalized(async (event) => {
  const object = event.data;
  const filePath = object.name;
  const bucketName = object.bucket;

  if (!filePath.startsWith("videos/") || !filePath.endsWith(".mp4")) {
    console.log("Skipping non-video file:", filePath);
    return;
  }

  const lessonId = path.basename(filePath, ".mp4");

  const bucket = storage.bucket(bucketName);
  const tmpFile = path.join(os.tmpdir(), path.basename(filePath));

  console.log("Downloading video to:", tmpFile);
  await bucket.file(filePath).download({ destination: tmpFile });

  console.log("Running scene detection...");
  const scenes = await detectScenes(tmpFile);
  console.log("Detected scenes:", scenes);

  console.log("Getting duration...");
  const duration = await getDuration(tmpFile);
  console.log("Duration:", duration);

  console.log("Building srcArray...");
  const srcArray = buildSrcArray(scenes, duration);

  console.log("Writing srcArray to Firestore...");
  await db.collection("lessons").doc(lessonId).set(
    { srcArray },
    { merge: true }
  );

  console.log("Cleaning up temp file...");
  fs.unlinkSync(tmpFile);

  console.log("Done!");
});

function detectScenes(video) {
  return new Promise((resolve, reject) => {
    const times = [];

    const proc = spawn(ffmpegPath, [
      "-i", video,
      "-filter:v", "select='gt(scene,0.3)',showinfo",
      "-f", "null", "-"
    ]);

    proc.stderr.on("data", (data) => {
      const text = data.toString();
      const match = text.match(/pts_time:(\d+\.\d+)/);
      if (match) times.push(parseFloat(match[1]));
    });

    proc.on("close", (code) => {
      if (code === 0) resolve(times);
      else reject(new Error("Scene detection failed"));
    });
  });
}

function getDuration(video) {
  return new Promise((resolve, reject) => {
    let duration = null;

    const proc = spawn(ffmpegPath, [
      "-i", video,
      "-f", "null", "-"
    ]);

    proc.stderr.on("data", (data) => {
      const text = data.toString();
      const match = text.match(/Duration: (\d+):(\d+):(\d+\.\d+)/);
      if (match) {
        const h = parseInt(match[1]);
        const m = parseInt(match[2]);
        const s = parseFloat(match[3]);
        duration = h*3600 + m*60 + s;
      }
    });

    proc.on("close", () => {
      if (duration == null) reject(new Error("Unable to read duration"));
      else resolve(duration);
    });
  });
}

function buildSrcArray(scenes, duration) {
  const boundaries = [0, ...scenes, duration];

  const arr = [];
  let freeze = 0;

  arr.push({
    src_start: null,
    src_end: null,
    freezeFrame: null,
    menuLink: "Opening",
    side: false,
    loop: false,
  });

  for (let i = 0; i < boundaries.length - 1; i++) {
    const start = boundaries[i];
    const end = boundaries[i + 1];

    if (end - start < 0.4) continue; // skip yellow flashes

    arr.push({
      src_start: Math.round(start * 100) / 100,
      src_end: Math.round(end * 100) / 100,
      freezeFrame: freeze++,
      menuLink: "",
      side: false,
      loop: false,
    });
  }

  return arr;
}

// Cloud Function to detect yellow screen frames and adjust srcArray
exports.detectYellowScreen = onCall(
  {
    memory: "1GiB",
    timeoutSeconds: 120,
  },
  async (request) => {
  const { videoPath, videoFilename } = request.data;
  
  if (!videoPath || !videoFilename) {
    throw new Error("videoPath and videoFilename are required");
  }

  const bucket = admin.storage().bucket();
  const tmpFile = path.join(os.tmpdir(), `yellow_detect_${Date.now()}.mp4`);

  try {
    console.log("Downloading video for yellow screen detection:", videoPath);
    await bucket.file(videoPath).download({ destination: tmpFile });

    console.log("Detecting yellow screen frames...");
    const yellowRanges = await detectYellowFrames(tmpFile);
    console.log("Detected yellow screen ranges:", yellowRanges);

    // Get current srcArray
    const videoDoc = await db.collection("lessons").doc(videoFilename).get();
    if (!videoDoc.exists) {
      throw new Error(`Video document not found: ${videoFilename}`);
    }

    const currentData = videoDoc.data();
    const originalSrcArray = currentData.originalSrcArray || currentData.srcArray || [];
    const currentSrcArray = currentData.srcArray || [];

    // Store original if not already stored
    if (!currentData.originalSrcArray) {
      await db.collection("lessons").doc(videoFilename).set({
        originalSrcArray: currentSrcArray
      }, { merge: true });
    }

    // Adjust srcArray to skip yellow screen ranges
    const adjustedSrcArray = adjustSrcArrayForYellowScreen(originalSrcArray, yellowRanges);

    // Update with adjusted srcArray
    await db.collection("lessons").doc(videoFilename).set({
      srcArray: adjustedSrcArray,
      yellowScreenRanges: yellowRanges
    }, { merge: true });

    console.log("Yellow screen detection complete");
    return {
      success: true,
      yellowRanges: yellowRanges,
      adjustedSegments: adjustedSrcArray.length
    };
  } catch (error) {
    console.error("Error detecting yellow screen:", error);
    throw new Error(`Yellow screen detection failed: ${error.message}`);
  } finally {
    // Clean up temp file
    if (fs.existsSync(tmpFile)) {
      fs.unlinkSync(tmpFile);
    }
  }
});

// Detect yellow screen frames using raw RGB frame data and LAB color space
// Avoids all FFmpeg color filters - uses raw video output and pixel sampling
// Returns yellow frame ranges after converting raw detections to contiguous spans
function detectYellowFrames(video) {
  return new Promise((resolve, reject) => {
    const yellowFrames = [];
    let videoWidth = null;
    let videoHeight = null;
    let frameRate = 5; // fps=5 from ffmpeg command
    let frameIndex = 0;
    let frameBuffer = Buffer.alloc(0);
    
    // Yellow target in LAB color space
    const yellowLAB = { L: 97, A: -21, B: 94 };
    const deltaEThreshold = 40; // ΔE distance threshold for yellow detection
    const sampleStep = 20; // Sample every 20th pixel
    const yellowPixelThreshold = 0.5; // >50% of sampled pixels must be yellow

    // First, get video dimensions from FFmpeg
    getVideoDimensions(video).then(({ width, height }) => {
      videoWidth = width;
      videoHeight = height;
      const frameSize = width * height * 3; // RGB24 = 3 bytes per pixel

      // Use ffmpeg to output raw RGB frames at 5 fps
      const proc = spawn(ffmpegPath, [
        "-i", video,
        "-vf", "fps=5",
        "-f", "image2pipe",
        "-vcodec", "rawvideo",
        "-pix_fmt", "rgb24",
        "-"
      ]);

      proc.stdout.on("data", (data) => {
        // Accumulate frame data
        frameBuffer = Buffer.concat([frameBuffer, data]);

        // Process complete frames
        while (frameBuffer.length >= frameSize) {
          const frameData = frameBuffer.slice(0, frameSize);
          frameBuffer = frameBuffer.slice(frameSize);

          // Sample pixels and check for yellow
          const yellowPixelCount = sampleFrameForYellow(
            frameData,
            videoWidth,
            videoHeight,
            sampleStep,
            yellowLAB,
            deltaEThreshold
          );

          const totalSamples = Math.floor(videoWidth / sampleStep) * Math.floor(videoHeight / sampleStep);
          const yellowRatio = yellowPixelCount / totalSamples;

          if (yellowRatio > yellowPixelThreshold) {
            const time = frameIndex / frameRate;
            yellowFrames.push({ frame: frameIndex, time });
          }

          frameIndex++;
        }
      });

      proc.stderr.on("data", (data) => {
        // FFmpeg info/errors go to stderr, but we don't need to parse it
      });

      proc.on("close", (code) => {
        if (code !== 0 && code !== 1) {
          reject(new Error(`FFmpeg process failed with code ${code}`));
          return;
        }

        // Convert raw {frame, time} entries to time ranges
        const uniqueTimes = [...new Set(yellowFrames.map((entry) => entry.time))].sort((a, b) => a - b);
        console.log("Detected yellow frames:", yellowFrames);

        const yellowRanges = framesToRanges(uniqueTimes);
        resolve(yellowRanges);
      });

      proc.on("error", (error) => {
        reject(error);
      });
    }).catch(reject);
  });
}

// Get video dimensions from FFmpeg
function getVideoDimensions(video) {
  return new Promise((resolve, reject) => {
    let width = null;
    let height = null;

    const proc = spawn(ffmpegPath, [
      "-i", video,
      "-f", "null", "-"
    ]);

    proc.stderr.on("data", (data) => {
      const text = data.toString();
      // Look for video stream info: "Stream #0:0 ... Video: ... 1484x1080"
      const match = text.match(/(\d+)x(\d+)/);
      if (match && !width) {
        width = parseInt(match[1], 10);
        height = parseInt(match[2], 10);
      }
    });

    proc.on("close", () => {
      if (width && height) {
        resolve({ width, height });
      } else {
        reject(new Error("Could not determine video dimensions"));
      }
    });

    proc.on("error", reject);
  });
}

// Sample frame pixels and count yellow pixels using LAB color space
function sampleFrameForYellow(frameData, width, height, sampleStep, yellowLAB, deltaEThreshold) {
  let yellowCount = 0;
  let totalSamples = 0;

  // Sample every Nth pixel horizontally and vertically
  for (let y = 0; y < height; y += sampleStep) {
    for (let x = 0; x < width; x += sampleStep) {
      // Calculate pixel offset in buffer (RGB24 format)
      const offset = (y * width + x) * 3;
      
      if (offset + 2 < frameData.length) {
        // Read RGB values
        const R = frameData[offset];
        const G = frameData[offset + 1];
        const B = frameData[offset + 2];

        // Convert RGB to LAB
        const pixelLAB = convert.rgb.lab([R, G, B]);

        // Calculate ΔE distance (CIE76)
        const deltaE = calculateDeltaE(pixelLAB, yellowLAB);

        if (deltaE < deltaEThreshold) {
          yellowCount++;
        }
        totalSamples++;
      }
    }
  }

  return yellowCount;
}

// Calculate ΔE (CIE76) color distance between two LAB colors
// lab1 is array [L, A, B] from color-convert, lab2 is object {L, A, B}
function calculateDeltaE(lab1, lab2) {
  const dL = lab1[0] - lab2.L;
  const dA = lab1[1] - lab2.A;
  const dB = lab1[2] - lab2.B;
  return Math.sqrt(dL * dL + dA * dA + dB * dB);
}

// Convert frame detections to time ranges
function framesToRanges(yellowFrames) {
  if (yellowFrames.length === 0) return [];
  
  const ranges = [];
  let rangeStart = yellowFrames[0];
  let rangeEnd = yellowFrames[0];
  
  for (let i = 1; i < yellowFrames.length; i++) {
    const currentFrame = yellowFrames[i];
    
    // If frames are consecutive or close (within 2 seconds), extend range
    if (currentFrame - rangeEnd <= 2) {
      rangeEnd = currentFrame;
    } else {
      // End current range and start new one
      ranges.push({
        start: Math.round(rangeStart * 100) / 100,
        end: Math.round((rangeEnd + 1) * 100) / 100 // Add 1 second buffer
      });
      rangeStart = currentFrame;
      rangeEnd = currentFrame;
    }
  }
  
  // Add final range
  ranges.push({
    start: Math.round(rangeStart * 100) / 100,
    end: Math.round((rangeEnd + 1) * 100) / 100
  });
  
  return mergeYellowRanges(ranges);
}

// Merge yellow ranges that are close together (within 0.5 seconds)
function mergeYellowRanges(ranges) {
  if (ranges.length === 0) return [];
  
  const merged = [];
  ranges.sort((a, b) => a.start - b.start);
  
  let current = { ...ranges[0] };
  
  for (let i = 1; i < ranges.length; i++) {
    const next = ranges[i];
    // If ranges are close (within 0.5 seconds), merge them
    if (next.start - current.end < 0.5) {
      current.end = Math.max(current.end, next.end);
    } else {
      merged.push(current);
      current = { ...next };
    }
  }
  merged.push(current);
  
  return merged;
}

// Adjust srcArray to skip yellow screen ranges
function adjustSrcArrayForYellowScreen(srcArray, yellowRanges) {
  if (!yellowRanges || yellowRanges.length === 0) {
    return srcArray; // No yellow screens detected, return original
  }

  const adjusted = [];
  
  for (const segment of srcArray) {
    // Keep opening segment (no timing)
    if (segment.src_start === null || segment.src_end === null) {
      adjusted.push(segment);
      continue;
    }

    let segmentStart = segment.src_start;
    let segmentEnd = segment.src_end;
    let segmentSkipped = false;

    // Check if segment overlaps with any yellow screen range
    for (const yellowRange of yellowRanges) {
      // If segment is entirely within yellow range, skip it
      if (segmentStart >= yellowRange.start && segmentEnd <= yellowRange.end) {
        segmentSkipped = true;
        break;
      }
      
      // If segment overlaps with yellow range, adjust it
      if (segmentStart < yellowRange.end && segmentEnd > yellowRange.start) {
        // Segment starts before yellow but overlaps
        if (segmentStart < yellowRange.start && segmentEnd > yellowRange.start) {
          // Split: keep part before yellow
          if (yellowRange.start - segmentStart > 0.1) {
            adjusted.push({
              ...segment,
              src_start: segmentStart,
              src_end: yellowRange.start
            });
          }
          // Adjust segment to start after yellow
          segmentStart = yellowRange.end;
        }
        
        // Segment starts in yellow but extends beyond
        if (segmentStart < yellowRange.end && segmentEnd > yellowRange.end) {
          segmentStart = yellowRange.end;
        }
      }
    }

    // Add segment if it wasn't entirely skipped and has valid timing
    if (!segmentSkipped && segmentEnd > segmentStart && segmentEnd - segmentStart > 0.1) {
      adjusted.push({
        ...segment,
        src_start: Math.round(segmentStart * 100) / 100,
        src_end: Math.round(segmentEnd * 100) / 100
      });
    }
  }

  return adjusted;
}
