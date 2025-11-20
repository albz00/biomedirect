const {onObjectFinalized} = require("firebase-functions/v2/storage");
const {onCall} = require("firebase-functions/v2/https");
const admin = require("firebase-admin");
const { Storage } = require("@google-cloud/storage");
const os = require("os");
const path = require("path");
const fs = require("fs");
const ffmpegPath = require("ffmpeg-static");
const { spawn } = require("child_process");

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
exports.detectYellowScreen = onCall(async (request) => {
  const { videoPath, videoFilename } = request.data;
  
  if (!videoPath || !videoFilename) {
    throw new Error("videoPath and videoFilename are required");
  }

  const bucket = storage.bucket();
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

// Detect yellow screen frames using ffmpeg
// Uses frame extraction and color analysis to identify yellow frames
function detectYellowFrames(video) {
  return new Promise((resolve, reject) => {
    const yellowFrames = [];
    const tmpDir = os.tmpdir();
    const framePattern = path.join(tmpDir, `yellow_frame_%03d.png`);
    
    // Extract frames at 1 frame per second for analysis
    const extractProc = spawn(ffmpegPath, [
      "-i", video,
      "-vf", "fps=1", // 1 frame per second
      "-frames:v", "1000", // Limit to 1000 frames max
      framePattern
    ]);

    extractProc.on("close", async (code) => {
      if (code !== 0 && code !== 1) {
        // Clean up any extracted frames
        cleanupFrames(tmpDir, "yellow_frame_");
        reject(new Error("Frame extraction failed"));
        return;
      }

      try {
        // Analyze extracted frames for yellow color
        const frameFiles = fs.readdirSync(tmpDir)
          .filter(f => f.startsWith("yellow_frame_") && f.endsWith(".png"))
          .sort();

        for (const frameFile of frameFiles) {
          const framePath = path.join(tmpDir, frameFile);
          const frameNum = parseInt(frameFile.match(/\d+/)[0]);
          const frameTime = frameNum; // 1 frame per second, so time = frame number
          
          // Use ffmpeg to get color statistics for this frame
          const isYellow = await analyzeFrameForYellow(framePath);
          
          if (isYellow) {
            yellowFrames.push(frameTime);
          }
        }

        // Convert frame detections to time ranges
        const yellowRanges = framesToRanges(yellowFrames);
        
        // Clean up extracted frames
        cleanupFrames(tmpDir, "yellow_frame_");
        
        resolve(yellowRanges);
      } catch (error) {
        cleanupFrames(tmpDir, "yellow_frame_");
        reject(error);
      }
    });

    extractProc.on("error", (error) => {
      cleanupFrames(tmpDir, "yellow_frame_");
      reject(error);
    });
  });
}

// Analyze a single frame for yellow color dominance
function analyzeFrameForYellow(framePath) {
  return new Promise((resolve, reject) => {
    // Use ffmpeg to get color statistics
    const proc = spawn(ffmpegPath, [
      "-i", framePath,
      "-vf", "signalstats",
      "-f", "null", "-"
    ]);

    let yMax = 0;
    let uAvg = 0;
    let vAvg = 0;
    let found = false;

    proc.stderr.on("data", (data) => {
      const text = data.toString();
      
      // Extract YUV color statistics
      const yMatch = text.match(/YMAX:(\d+\.\d+)/);
      const uMatch = text.match(/UAVG:(\d+\.\d+)/);
      const vMatch = text.match(/VAVG:(\d+\.\d+)/);
      
      if (yMatch && uMatch && vMatch && !found) {
        yMax = parseFloat(yMatch[1]) / 255; // Normalize 0-255 to 0-1
        uAvg = parseFloat(uMatch[1]) / 255;
        vAvg = parseFloat(vMatch[1]) / 255;
        found = true;
      }
    });

    proc.on("close", () => {
      if (!found) {
        resolve(false);
        return;
      }

      // Yellow detection criteria:
      // Yellow in YUV color space:
      // - High brightness: Y > 0.6 (bright yellow)
      // - Low-medium blue: U < 0.5 (typically 0.1-0.3 for yellow)
      // - High red: V > 0.4 (typically 0.5-0.7 for yellow)
      const isYellow = yMax > 0.6 && uAvg < 0.5 && vAvg > 0.4;
      resolve(isYellow);
    });

    proc.on("error", reject);
  });
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

// Clean up extracted frame files
function cleanupFrames(tmpDir, prefix) {
  try {
    const files = fs.readdirSync(tmpDir).filter(f => f.startsWith(prefix));
    for (const file of files) {
      fs.unlinkSync(path.join(tmpDir, file));
    }
  } catch (error) {
    console.error("Error cleaning up frames:", error);
  }
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
