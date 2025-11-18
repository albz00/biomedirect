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

    // Detect yellow screens and filter them out
    const yellowScreenTimes = await detectYellowScreens(tempFilePath);
    console.log("Yellow screen times detected:", yellowScreenTimes);

    // Filter out scene changes that occur during yellow screens
    const filteredSceneData = filterYellowScreens(sceneData, yellowScreenTimes);
    console.log("Filtered scene data (yellow screens removed):", filteredSceneData);

    // Convert to srcArray format
    const srcArray = buildSrcArray(filteredSceneData);

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

// Detect yellow screens in video
function detectYellowScreens(videoPath) {
    return new Promise((resolve, reject) => {
        let yellowTimes = [];
        // Detect frames with high yellow content
        // Yellow in RGB: high R and G (>=180), low B (<=120)
        // We sample the center area of frames (where yellow screens are typically uniform)
        // and check if those pixels are yellow
        
        // Method: Crop center 50% of frame, scale down for efficiency, then check for yellow pixels
        // This detects frames where the center area is predominantly yellow
        ffmpeg(videoPath)
            .outputOptions([
                "-vf", "crop=iw*0.5:ih*0.5:iw*0.25:ih*0.25,scale=100:100,select='gte(r,180)*gte(g,180)*lte(b,120)',showinfo",
                "-vsync", "0",
                "-f", "null",
            ])
            .on("stderr", function(line) {
                // Parse showinfo output for frame timestamps
                const ptsTimeMatch = line.match(/pts_time:([\d.]+)/);
                if (ptsTimeMatch) {
                    const time = parseFloat(ptsTimeMatch[1]);
                    // Group yellow frames into time ranges (frames within 0.5s are considered same yellow screen)
                    if (yellowTimes.length === 0 || 
                        Math.abs(yellowTimes[yellowTimes.length - 1].end - time) > 0.5) {
                        yellowTimes.push({ start: time, end: time });
                    } else {
                        yellowTimes[yellowTimes.length - 1].end = time;
                    }
                }
            })
            .on("end", function() {
                // Merge overlapping or close yellow screen periods
                const merged = [];
                for (let i = 0; i < yellowTimes.length; i++) {
                    if (merged.length === 0 || yellowTimes[i].start - merged[merged.length - 1].end > 1.0) {
                        merged.push({ ...yellowTimes[i] });
                    } else {
                        merged[merged.length - 1].end = Math.max(merged[merged.length - 1].end, yellowTimes[i].end);
                    }
                }
                console.log(`Detected ${merged.length} yellow screen periods`);
                resolve(merged);
            })
            .on("error", function(err) {
                console.error("FFmpeg yellow screen detection error:", err);
                // If detection fails, return empty array (no yellow screens detected)
                resolve([]);
            })
            .run();
    });
}

// Filter out scene changes that occur during yellow screens
function filterYellowScreens(sceneTimes, yellowScreenRanges) {
    if (yellowScreenRanges.length === 0) {
        return sceneTimes;
    }

    return sceneTimes.filter(sceneTime => {
        // Check if this scene change occurs during a yellow screen period
        for (const yellowRange of yellowScreenRanges) {
            // Include a small buffer (0.2s) around yellow screens
            if (sceneTime >= yellowRange.start - 0.2 && sceneTime <= yellowRange.end + 0.2) {
                console.log(`Filtering out scene change at ${sceneTime}s (yellow screen: ${yellowRange.start}-${yellowRange.end}s)`);
                return false;
            }
        }
        return true;
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

