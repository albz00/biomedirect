# Firebase Cloud Functions - Auto srcArray Generator

This function automatically generates `srcArray` timing data when videos are uploaded to Firebase Storage.

## How It Works

1. When a video is uploaded to `videos/{lessonId}.mp4` in Firebase Storage
2. The function triggers automatically
3. It downloads the video temporarily
4. Uses FFmpeg to detect scene changes
5. Converts scene changes into `srcArray` format
6. Saves the `srcArray` to Firestore at `lessons/{lessonId}`
7. Cleans up the temporary file

## Setup

Dependencies are already installed. To deploy:

```bash
firebase deploy --only functions
```

## Configuration

- **Scene Detection Threshold**: Adjust `sceneThreshold` in `detectScenes()` function (default: 0.3)
  - Lower values = more sensitive (more scene changes detected)
  - Higher values = less sensitive (fewer scene changes)

## Testing

After deployment, upload a video to Firebase Storage at:
- Path: `videos/{lessonId}.mp4`
- Example: `videos/cytoskeleton_introduction_t.mp4`

The function will automatically process it and create the `srcArray` in Firestore.

## Notes

- The function only processes `.mp4` files in the `videos/` folder
- Scene detection uses FFmpeg's scene filter
- Generated `srcArray` includes an "Opening" segment and segments for each detected scene change

