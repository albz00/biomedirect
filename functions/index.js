const {onObjectFinalized} = require("firebase-functions/v2/storage");
const {initializeApp} = require("firebase-admin/app");
const {getStorage} = require("firebase-admin/storage");
const {getFirestore} = require("firebase-admin/firestore");
const ffmpeg = require("fluent-ffmpeg");
const ffmpegInstaller = require("@ffmpeg-installer/ffmpeg");
const os = require("os");
const path = require("path");
const fs = require("fs");

ffmpeg.setFfmpegPath(ffmpegInstaller.path);

initializeApp();

exports.generateSrcArray = onObjectFinalized(async (event) => {
    const object = event.data;
    const filePath = object.name;

    // Only process videos in the "videos" folder
    if (!filePath.startsWith("videos/") || !filePath.endsWith(".mp4")) {
        console.log("Skipping non-video upload:", filePath);
        return null;
    }

    const bucket = getStorage().bucket(object.bucket);
    const fileName = path.basename(filePath);
    const lessonId = fileName.replace(".mp4", "");

    const tempFilePath = path.join(os.tmpdir(), fileName);
    await bucket.file(filePath).download({ destination: tempFilePath });

    console.log("Downloaded video to:", tempFilePath);

    // Scene detection using ffmpeg
    const sceneData = await detectScenes(tempFilePath);

    console.log("Scene data detected:", sceneData);

    // Convert to srcArray format
    const srcArray = buildSrcArray(sceneData);

    console.log("Final srcArray:", srcArray);

    // Save to Firestore
    await getFirestore()
        .collection("lessons")
        .doc(lessonId)
        .set({ srcArray }, { merge: true });

    console.log("Saved srcArray to Firestore for", lessonId);

    // Cleanup
    fs.unlinkSync(tempFilePath);

    return null;
});

// Scene detection function
function detectScenes(videoPath) {
    return new Promise((resolve, reject) => {
        let sceneTimes = [];
        const sceneThreshold = 0.3; // Adjust this value (0.0-1.0) to change sensitivity

        ffmpeg(videoPath)
            .outputOptions([
                "-vf", `select='gt(scene,${sceneThreshold})',showinfo`,
                "-f", "null",
            ])
            .on("stderr", function(line) {
                // Parse showinfo output for frame timestamps
                // Format: n:0 pts:123456 pts_time:12.3456
                const ptsTimeMatch = line.match(/pts_time:([\d.]+)/);
                if (ptsTimeMatch) {
                    const time = parseFloat(ptsTimeMatch[1]);
                    // Avoid duplicates (same scene change might appear multiple times)
                    if (sceneTimes.length === 0 || 
                        Math.abs(sceneTimes[sceneTimes.length - 1] - time) > 0.1) {
                        sceneTimes.push(time);
                    }
                }
            })
            .on("end", function() {
                // Sort and remove duplicates
                sceneTimes = [...new Set(sceneTimes)].sort((a, b) => a - b);
                console.log(`Detected ${sceneTimes.length} scene changes`);
                resolve(sceneTimes);
            })
            .on("error", function(err) {
                console.error("FFmpeg error:", err);
                // If scene detection fails, return empty array
                // This allows the function to still create a basic srcArray
                resolve([]);
            })
            .run();
    });
}

// Convert scene list to srcArray
function buildSrcArray(sceneTimes) {
    let segments = [];
    let prev = 0;

    // Add opening segment
    segments.push({
        src_start: null,
        src_end: null,
        freezeFrame: null,
        menuLink: "Opening",
        side: false,
        loop: false
    });

    for (let i = 0; i < sceneTimes.length; i++) {
        const start = prev;
        const end = sceneTimes[i];

        segments.push({
            src_start: parseFloat(start.toFixed(2)),
            src_end: parseFloat(end.toFixed(2)),
            freezeFrame: i,
            menuLink: "",
            side: false,
            loop: false
        });

        prev = end;
    }

    // Add final segment if there are scenes
    if (sceneTimes.length > 0) {
        segments.push({
            src_start: parseFloat(prev.toFixed(2)),
            src_end: null,
            freezeFrame: sceneTimes.length,
            menuLink: "",
            side: false,
            loop: false
        });
    }

    return segments;
}

