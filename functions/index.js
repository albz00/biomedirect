const {onObjectFinalized} = require("firebase-functions/v2/storage");
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
