const {onObjectFinalized} = require("firebase-functions/v2/storage");
const admin = require("firebase-admin");
const {Storage} = require("@google-cloud/storage");
const ffmpegPath = require("ffmpeg-static");
const {spawn} = require("child_process");
const os = require("os");
const path = require("path");
const fs = require("fs");

admin.initializeApp();

const db = admin.firestore();
const storage = new Storage();

exports.generateSrcArray = onObjectFinalized(
  {
    memory: "1GB",
    timeoutSeconds: 120,
    disk: "2GB",
  },
  async (event) => {
    const object = event.data;
    const filePath = object.name || "";
    const bucketName = object.bucket;

    // Only react to MP4s in the videos/ folder
    if (!filePath.startsWith("videos/") || !filePath.endsWith(".mp4")) {
      console.log("Skipping non-video upload:", filePath);
      return;
    }

    const lessonId = path.basename(filePath, ".mp4"); // e.g. cytoskeleton_introduction_t
    console.log(`Processing video for lesson: ${lessonId}`);

    const bucket = storage.bucket(bucketName);
    const tempFilePath = path.join(os.tmpdir(), path.basename(filePath));

    try {
      // 1) Download video to /tmp
      console.log(`Downloading ${filePath} to ${tempFilePath}`);
      await bucket.file(filePath).download({destination: tempFilePath});

      // 2) Get scene change timestamps
      console.log("Detecting scenes...");
      const sceneTimes = await detectScenes(tempFilePath);
      console.log(`Detected ${sceneTimes.length} scene changes:`, sceneTimes);

      // 3) Get total duration
      console.log("Getting video duration...");
      const duration = await getDuration(tempFilePath);
      console.log(`Video duration: ${duration}s`);

      // 4) Build srcArray from scene times
      const srcArray = buildSrcArray(sceneTimes, duration);
      console.log(`Generated srcArray with ${srcArray.length} segments`);

      // 5) Write into Firestore
      await db.collection("lessons").doc(lessonId).set(
        {srcArray},
        {merge: true}
      );
      console.log(`Saved srcArray to Firestore for ${lessonId}`);

      // 6) Clean up temp file
      fs.unlinkSync(tempFilePath);
      console.log("Cleanup complete");
    } catch (error) {
      console.error(`Error processing ${lessonId}:`, error);
      // Clean up temp file even on error
      if (fs.existsSync(tempFilePath)) {
        fs.unlinkSync(tempFilePath);
      }
      throw error;
    }
  });

function detectScenes(videoPath) {
  return new Promise((resolve, reject) => {
    const times = [];
    const ff = spawn(ffmpegPath, [
      "-i", videoPath,
      "-filter:v", "select='gt(scene,0.3)',showinfo",
      "-f", "null", "-",
    ]);

    ff.stderr.on("data", (data) => {
      const text = data.toString();
      const match = text.match(/pts_time:(\d+\.\d+)/);
      if (match) {
        times.push(parseFloat(match[1]));
      }
    });

    ff.on("close", (code) => {
      // Sort and remove duplicates
      const uniqueTimes = [...new Set(times)].sort((a, b) => a - b);
      // Even if ffmpeg exits with non-zero, if we got some times, use them
      if (uniqueTimes.length > 0 || code === 0) {
        resolve(uniqueTimes);
      } else {
        reject(new Error("ffmpeg scene detect failed"));
      }
    });

    ff.on("error", (err) => {
      reject(new Error(`ffmpeg spawn failed: ${err.message}`));
    });
  });
}

function getDuration(videoPath) {
  return new Promise((resolve, reject) => {
    const ff = spawn(ffmpegPath, [
      "-i", videoPath,
      "-f", "null", "-",
    ]);

    let duration = null;

    ff.stderr.on("data", (data) => {
      const text = data.toString();
      const m = text.match(/Duration: (\d+):(\d+):(\d+\.\d+)/);
      if (m) {
        const h = parseInt(m[1], 10);
        const mnt = parseInt(m[2], 10);
        const s = parseFloat(m[3]);
        duration = h * 3600 + mnt * 60 + s;
      }
    });

    ff.on("close", () => {
      if (duration != null) resolve(duration);
      else reject(new Error("could not read duration"));
    });

    ff.on("error", (err) => {
      reject(new Error(`ffmpeg spawn failed: ${err.message}`));
    });
  });
}

// Turn scene boundaries into srcArray entries
function buildSrcArray(sceneTimes, duration) {
  const boundaries = [0, ...sceneTimes, duration];

  const srcArray = [];

  // Optional: first element "opening"
  srcArray.push({
    src_start: null,
    src_end: null,
    freezeFrame: null,
    menuLink: "Opening",
    side: false,
    loop: false,
  });

  let freezeFrame = 0;

  for (let i = 0; i < boundaries.length - 1; i++) {
    const start = boundaries[i];
    const end = boundaries[i + 1];
    const length = end - start;

    // Heuristic: skip super-short segments (likely yellow flashes)
    if (length < 0.4) continue;

    srcArray.push({
      src_start: round(start),
      src_end: round(end),
      freezeFrame: freezeFrame++,
      menuLink: "",        // we can fill this in later / via CMS
      side: false,
      loop: false,
    });
  }

  return srcArray;
}

function round(val) {
  return Math.round(val * 100) / 100;
}

