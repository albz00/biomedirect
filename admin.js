// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyB0KbGW-4znfF19ikrUahdCyd_bEungkH4",
    authDomain: "biome-865cc.firebaseapp.com",
    projectId: "biome-865cc",
    storageBucket: "biome-865cc.firebasestorage.app",
    messagingSenderId: "952652458408",
    appId: "1:952652458408:web:23e7f0689e9cf973be959d"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const functions = firebase.functions();

// State
let availableVideos = [];
let lessonsData = [];
let loginScreen, dashboardScreen, loginForm, logoutBtn, scanBtn, refreshVideosBtn, statusText, loginError, lessonsList, videosList;

// Check authentication state on load and on changes (set up immediately)
auth.onAuthStateChanged((user) => {
    console.log('Auth state changed, user:', user ? user.email : 'null');
    
    // Wait for DOM if not ready yet
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            handleAuthStateChange(user);
        });
    } else {
        handleAuthStateChange(user);
    }
});

function handleAuthStateChange(user) {
    // Ensure DOM elements are available
    if (!loginScreen) {
        loginScreen = document.getElementById('loginScreen');
    }
    if (!dashboardScreen) {
        dashboardScreen = document.getElementById('dashboardScreen');
    }
    
    if (user) {
        console.log('User authenticated:', user.email);
        showDashboard();
    } else {
        console.log('User not authenticated');
        showLogin();
        // Clear any sensitive data when logged out
        lessonsData = [];
        availableVideos = [];
    }
}

// Wait for DOM to be ready for event listeners
document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    loginScreen = document.getElementById('loginScreen');
    dashboardScreen = document.getElementById('dashboardScreen');
    loginForm = document.getElementById('loginForm');
    logoutBtn = document.getElementById('logoutBtn');
    scanBtn = document.getElementById('scanBtn');
    refreshVideosBtn = document.getElementById('refreshVideosBtn');
    statusText = document.getElementById('statusText');
    loginError = document.getElementById('loginError');
    lessonsList = document.getElementById('lessonsList');
    videosList = document.getElementById('videosList');

    // Setup event listeners
    setupEventListeners();
    
    // Check current auth state and update UI
    const currentUser = auth.currentUser;
    if (currentUser) {
        showDashboard();
    } else {
        showLogin();
    }
});

// Handle auth errors (e.g., token expiration)
auth.onIdTokenChanged((user) => {
    if (!user && auth.currentUser === null) {
        // Token expired or user was logged out
        console.log('Authentication token expired or user logged out');
        if (loginScreen && dashboardScreen) {
            showLogin();
        }
    }
});

// Setup event listeners
function setupEventListeners() {
    // Login
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            if (loginError) {
                loginError.textContent = '';
                loginError.style.display = 'none';
            }
            
            const emailInput = document.getElementById('email');
            const passwordInput = document.getElementById('password');
            
            if (!emailInput || !passwordInput) {
                console.error('Email or password input not found');
                return;
            }
            
            const email = emailInput.value.trim();
            const password = passwordInput.value;
            
            if (!email || !password) {
                showError('Please enter both email and password.');
                return;
            }
            
            try {
                console.log('Attempting login for:', email);
                const userCredential = await auth.signInWithEmailAndPassword(email, password);
                console.log('Login successful:', userCredential.user.email);
                // Login successful - onAuthStateChanged will handle navigation
            } catch (error) {
                console.error('Login error:', error);
                let errorMessage = 'Login failed. Please check your credentials.';
                
                // Provide more specific error messages
                if (error.code === 'auth/user-not-found') {
                    errorMessage = 'No account found with this email.';
                } else if (error.code === 'auth/wrong-password') {
                    errorMessage = 'Incorrect password.';
                } else if (error.code === 'auth/invalid-email') {
                    errorMessage = 'Invalid email address.';
                } else if (error.code === 'auth/user-disabled') {
                    errorMessage = 'This account has been disabled.';
                } else if (error.code === 'auth/too-many-requests') {
                    errorMessage = 'Too many failed login attempts. Please try again later.';
                } else if (error.code === 'auth/network-request-failed') {
                    errorMessage = 'Network error. Please check your connection.';
                } else if (error.message) {
                    errorMessage = error.message;
                }
                
                showError(errorMessage);
            }
        });
    }

    // Logout
    if (logoutBtn) {
        logoutBtn.addEventListener('click', async () => {
            try {
                await auth.signOut();
                console.log('User logged out successfully');
                // onAuthStateChanged will handle showing the login screen
            } catch (error) {
                console.error('Logout error:', error);
                alert('Error logging out: ' + error.message);
            }
        });
    }

    // Scan Lessons
    if (scanBtn) {
        scanBtn.addEventListener('click', async () => {
            await scanLessons();
        });
    }

    // Refresh Videos
    if (refreshVideosBtn) {
        refreshVideosBtn.addEventListener('click', async () => {
            await loadAvailableVideos();
        });
    }
}

// Show error message
function showError(message) {
    if (loginError) {
        loginError.textContent = message;
        loginError.style.display = 'block';
        loginError.style.visibility = 'visible';
        loginError.style.opacity = '1';
    } else {
        console.error('Error element not found:', message);
        alert(message);
    }
}

// Protect dashboard functions - ensure user is authenticated
function requireAuth() {
    const user = auth.currentUser;
    if (!user) {
        throw new Error('User must be authenticated');
    }
    return user;
}

// Functions
function showLogin() {
    if (!loginScreen || !dashboardScreen) {
        console.error('Screen elements not found');
        return;
    }
    console.log('Showing login screen');
    loginScreen.classList.remove('hidden');
    loginScreen.style.display = 'block';
    dashboardScreen.classList.add('hidden');
    dashboardScreen.style.display = 'none';
}

function showDashboard() {
    if (!loginScreen || !dashboardScreen) {
        console.error('Screen elements not found');
        return;
    }
    console.log('Showing dashboard');
    loginScreen.classList.add('hidden');
    loginScreen.style.display = 'none';
    dashboardScreen.classList.remove('hidden');
    dashboardScreen.style.display = 'block';
    
    // Only load videos if user is authenticated
    const user = auth.currentUser;
    if (user) {
        console.log('Loading videos for authenticated user');
        loadAvailableVideos();
    }
}

function setStatus(text, type = '') {
    statusText.textContent = text;
    statusText.parentElement.className = 'status-indicator' + (type ? ' ' + type : '');
}

async function loadAvailableVideos() {
    try {
        requireAuth(); // Ensure user is authenticated
    } catch (error) {
        setStatus('Authentication required', 'error');
        return;
    }
    
    setStatus('Loading available videos...', 'scanning');
    refreshVideosBtn.disabled = true;
    
    try {
        const videosRef = storage.ref().child('videos');
        const listResult = await videosRef.listAll();
        
        availableVideos = [];
        
        for (const itemRef of listResult.items) {
            const fileName = itemRef.name;
            if (fileName.endsWith('.mp4')) {
                availableVideos.push(fileName);
            }
        }
        
        availableVideos.sort();
        displayAvailableVideos();
        setStatus(`Loaded ${availableVideos.length} videos`, 'success');
    } catch (error) {
        console.error('Error loading videos:', error);
        setStatus('Error loading videos: ' + error.message, 'error');
    } finally {
        refreshVideosBtn.disabled = false;
    }
}

function displayAvailableVideos() {
    if (availableVideos.length === 0) {
        videosList.innerHTML = '<p class="placeholder">No videos found in Storage</p>';
        return;
    }
    
    videosList.innerHTML = availableVideos.map(video => 
        `<div class="video-item">${video}</div>`
    ).join('');
}

// Parse central menu to extract lesson paths and names
async function parseCentralMenu() {
    try {
        const response = await fetch('TextT/CentralMenuT.html');
        if (!response.ok) {
            throw new Error('Failed to fetch central menu');
        }
        const html = await response.text();
        
        // Parse HTML to extract lesson links
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        
        const lessons = [];
        const buttons = doc.querySelectorAll('button[onclick*="window.location.href"]');
        
        buttons.forEach(button => {
            const onclick = button.getAttribute('onclick');
            const match = onclick.match(/window\.location\.href=['"]([^'"]+)['"]/);
            if (match) {
                let path = match[1];
                // Paths in menu are relative to TextT/, so prepend TextT/ if not already there
                if (!path.startsWith('TextT/')) {
                    path = 'TextT/' + path;
                }
                const name = button.textContent.trim();
                lessons.push({ path, name });
            }
        });
        
        return lessons;
    } catch (error) {
        console.error('Error parsing central menu:', error);
        throw error;
    }
}

// Extract lessonId from HTML file
async function extractLessonIdFromHTML(lessonPath) {
    try {
        const response = await fetch(lessonPath);
        if (!response.ok) {
            throw new Error(`Failed to fetch ${lessonPath}`);
        }
        const html = await response.text();
        
        // Look for: const lessonId = "..."
        const match = html.match(/const\s+lessonId\s*=\s*["']([^"']+)["']/);
        if (match) {
            return match[1];
        }
        
        // Fallback: try to extract from path
        const pathMatch = lessonPath.match(/([^/]+)T\.html$/);
        if (pathMatch) {
            return pathMatch[1].toLowerCase().replace(/\s+/g, '_');
        }
        
        return null;
    } catch (error) {
        console.error(`Error extracting lessonId from ${lessonPath}:`, error);
        return null;
    }
}

async function scanLessons() {
    try {
        requireAuth(); // Ensure user is authenticated
    } catch (error) {
        setStatus('Authentication required', 'error');
        return;
    }
    
    setStatus('Scanning lessons from menu...', 'scanning');
    scanBtn.disabled = true;
    lessonsList.innerHTML = '<div class="spinner"></div>';
    
    try {
        // Step 1: Parse central menu to get all lesson paths
        setStatus('Parsing central menu...', 'scanning');
        const menuLessons = await parseCentralMenu();
        console.log(`Found ${menuLessons.length} lessons in menu`);
        
        // Step 2: Extract lessonIds from each HTML file
        setStatus('Extracting lesson IDs...', 'scanning');
        lessonsData = [];
        const extractPromises = [];
        
        for (const menuLesson of menuLessons) {
            extractPromises.push(
                extractLessonIdFromHTML(menuLesson.path).then(lessonId => {
                    if (lessonId) {
                        return {
                            path: menuLesson.path,
                            name: menuLesson.name,
                            lessonId: lessonId
                        };
                    }
                    return null;
                })
            );
        }
        
        const extractedLessons = (await Promise.all(extractPromises)).filter(l => l !== null);
        console.log(`Extracted ${extractedLessons.length} lesson IDs`);
        
        // Step 3: Check Firestore for videoPath and check video availability
        setStatus('Checking video availability...', 'scanning');
        const checkPromises = [];
        
        for (const lesson of extractedLessons) {
            checkPromises.push(
                (async () => {
                    // Check videoPaths collection for custom videoPath and yellowScreen setting
                    const videoPathDoc = await db.collection('videoPaths').doc(lesson.lessonId).get();
                    const videoPathData = videoPathDoc.exists ? videoPathDoc.data() : {};
                    const customVideoPath = videoPathData.videoPath || null;
                    const yellowScreen = videoPathData.yellowScreen !== undefined ? videoPathData.yellowScreen : true; // Default to true
                    
                    // Check if video exists
                    const videoCheck = await checkVideoAvailability(lesson.lessonId, customVideoPath);
                    
                    return {
                        path: lesson.path,
                        name: lesson.name,
                        lessonId: lesson.lessonId,
                        hasVideo: videoCheck.exists,
                        currentPath: customVideoPath || `videos/${lesson.lessonId}.mp4`,
                        error: videoCheck.error,
                        yellowScreen: yellowScreen
                    };
                })()
            );
        }
        
        lessonsData = await Promise.all(checkPromises);
        
        // Sort: missing videos first, then by name
        lessonsData.sort((a, b) => {
            if (a.hasVideo && !b.hasVideo) return 1;
            if (!a.hasVideo && b.hasVideo) return -1;
            return a.name.localeCompare(b.name);
        });
        
        displayLessons();
        
        const missingCount = lessonsData.filter(l => !l.hasVideo).length;
        const totalCount = lessonsData.length;
        
        setStatus(`Scan complete: ${missingCount} missing, ${totalCount - missingCount} found`, 
                  missingCount > 0 ? 'error' : 'success');
    } catch (error) {
        console.error('Error scanning lessons:', error);
        setStatus('Error scanning lessons: ' + error.message, 'error');
        lessonsList.innerHTML = '<p class="placeholder">Error loading lessons</p>';
    } finally {
        scanBtn.disabled = false;
    }
}

async function checkVideoAvailability(lessonId, customVideoPath) {
    try {
        const storageRef = storage.ref();
        const videoPath = customVideoPath || `videos/${lessonId}.mp4`;
        const fileRef = storageRef.child(videoPath);
        
        // Try to get download URL - if it fails, video doesn't exist
        await fileRef.getDownloadURL();
        return { exists: true, error: null };
    } catch (error) {
        // Check if it's a "not found" error
        if (error.code === 'storage/object-not-found' || error.code === 'storage/unauthorized') {
            return { exists: false, error: 'Video not found' };
        }
        return { exists: false, error: error.message };
    }
}

function displayLessons() {
    if (lessonsData.length === 0) {
        lessonsList.innerHTML = '<p class="placeholder">No lessons found</p>';
        return;
    }
    
    lessonsList.innerHTML = lessonsData.map(lesson => {
        const statusClass = lesson.hasVideo ? 'has-video' : 'missing';
        const statusText = lesson.hasVideo ? 'Has Video' : 'Missing';
        
        // Create options for video selector
        const videoOptions = availableVideos.map(video => {
            const selected = lesson.currentPath === `videos/${video}` ? 'selected' : '';
            return `<option value="${video}" ${selected}>${video}</option>`;
        }).join('');
        
        // Escape HTML in lesson name to prevent XSS
        const safeName = lesson.name.replace(/</g, '&lt;').replace(/>/g, '&gt;');
        const safeLessonId = lesson.lessonId.replace(/</g, '&lt;').replace(/>/g, '&gt;');
        const safePath = lesson.path.replace(/</g, '&lt;').replace(/>/g, '&gt;');
        
        return `
            <div class="lesson-item">
                <div class="lesson-item-header">
                    <span class="lesson-name">${safeName}</span>
                    <span class="lesson-status ${statusClass}">${statusText}</span>
                </div>
                <div class="lesson-details">
                    <div class="lesson-id">ID: ${safeLessonId}</div>
                    <div class="lesson-path">Path: ${safePath}</div>
                    <div class="current-video">Video: ${lesson.currentPath}</div>
                </div>
                <div class="lesson-assignment">
                    <div class="assignment-row">
                        <select id="video-select-${lesson.lessonId}">
                            <option value="">${lesson.hasVideo ? 'Change video...' : 'Select a video...'}</option>
                            ${videoOptions}
                        </select>
                        <button onclick="assignVideo('${lesson.lessonId}')" id="assign-btn-${lesson.lessonId}">
                            ${lesson.hasVideo ? 'Update' : 'Assign'}
                        </button>
                    </div>
                    <div class="yellow-screen-option">
                        <label>
                            <input type="checkbox" id="yellow-screen-${lesson.lessonId}" 
                                   ${lesson.yellowScreen ? 'checked' : ''} 
                                   onchange="toggleYellowScreen('${lesson.lessonId}')">
                            Remove yellow screen (adjust srcArray)
                        </label>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

async function assignVideo(lessonId) {
    try {
        requireAuth(); // Ensure user is authenticated
    } catch (error) {
        alert('Authentication required. Please log in again.');
        return;
    }
    
    const selectElement = document.getElementById(`video-select-${lessonId}`);
    const buttonElement = document.getElementById(`assign-btn-${lessonId}`);
    
    if (!selectElement || !selectElement.value) {
        alert('Please select a video first');
        return;
    }
    
    const selectedVideo = selectElement.value;
    const videoPath = `videos/${selectedVideo}`;
    
    buttonElement.disabled = true;
    buttonElement.textContent = 'Assigning...';
    
    try {
        // Update videoPaths collection with custom videoPath (not lessons collection)
        await db.collection('videoPaths').doc(lessonId).set({
            videoPath: videoPath
        }, { merge: true });
        
        // Update local data
        const lesson = lessonsData.find(l => l.lessonId === lessonId);
        if (lesson) {
            lesson.currentPath = videoPath;
            lesson.hasVideo = true; // Assume it exists since it's in the available videos list
            
            // Verify the video actually exists
            const videoCheck = await checkVideoAvailability(lessonId, videoPath);
            lesson.hasVideo = videoCheck.exists;
        }
        
        // Re-render to show updated status
        displayLessons();
        
        const lessonName = lesson ? lesson.name : lessonId;
        setStatus(`Video assigned to ${lessonName}`, 'success');
        
        // Clear status after 3 seconds
        setTimeout(() => {
            setStatus('Ready');
        }, 3000);
    } catch (error) {
        console.error('Error assigning video:', error);
        alert('Error assigning video: ' + error.message);
        buttonElement.disabled = false;
        const lesson = lessonsData.find(l => l.lessonId === lessonId);
        buttonElement.textContent = (lesson && lesson.hasVideo) ? 'Update' : 'Assign';
    }
}

// Toggle yellow screen setting
async function toggleYellowScreen(lessonId) {
    try {
        requireAuth();
    } catch (error) {
        alert('Authentication required. Please log in again.');
        return;
    }
    
    const checkbox = document.getElementById(`yellow-screen-${lessonId}`);
    if (!checkbox) return;
    
    const yellowScreen = checkbox.checked;
    const previousState = !yellowScreen; // Previous state (before toggle)
    
    try {
        // Get videoPath from videoPaths collection
        const videoPathDoc = await db.collection('videoPaths').doc(lessonId).get();
        if (!videoPathDoc.exists) {
            throw new Error('Video path not found for this lesson');
        }
        
        const videoPathData = videoPathDoc.data();
        const videoPath = videoPathData.videoPath || `videos/${lessonId}.mp4`;
        
        // Extract video filename from videoPath (e.g., "videos/filename.mp4" → "filename")
        const match = videoPath.match(/videos\/([^\/]+)\.mp4$/);
        if (!match) {
            throw new Error('Invalid video path format');
        }
        const videoFilename = match[1]; // Video filename without extension
        
        // Get current srcArray from lessons collection
        const videoDoc = await db.collection('lessons').doc(videoFilename).get();
        if (!videoDoc.exists) {
            throw new Error(`Video document not found: ${videoFilename}`);
        }
        
        const videoData = videoDoc.data();
        const currentSrcArray = videoData.srcArray || [];
        const originalSrcArray = videoData.originalSrcArray || currentSrcArray;
        let updatedSrcArray = currentSrcArray;
        
        if (!yellowScreen) {
            // User wants to REMOVE yellow screen - need to detect and adjust
            setStatus('Detecting yellow screen frames...', 'scanning');
            checkbox.disabled = true;
            
            try {
                // Call Cloud Function to detect yellow screens and adjust srcArray
                const detectYellowScreen = functions.httpsCallable('detectYellowScreen');
                const result = await detectYellowScreen({
                    videoPath: videoPath,
                    videoFilename: videoFilename
                });
                
                if (result.data.success) {
                    // Cloud Function has already updated the srcArray in Firestore
                    // Get the updated srcArray
                    const updatedDoc = await db.collection('lessons').doc(videoFilename).get();
                    updatedSrcArray = updatedDoc.data().srcArray || currentSrcArray;
                    
                    setStatus(`Yellow screen removed: ${result.data.yellowRanges.length} ranges detected, ${result.data.adjustedSegments} segments adjusted`, 'success');
                } else {
                    throw new Error('Yellow screen detection failed');
                }
            } catch (error) {
                console.error('Error calling yellow screen detection:', error);
                // Fallback to simple heuristic if Cloud Function fails
                setStatus('Using fallback method to remove yellow screen...', 'scanning');
                updatedSrcArray = adjustSrcArraySimple(currentSrcArray);
            }
        } else {
            // User wants to RESTORE yellow screen - use original srcArray
            // Restore original srcArray if it exists
            if (originalSrcArray && originalSrcArray.length > 0) {
                updatedSrcArray = originalSrcArray;
                setStatus('Restoring original srcArray with yellow screens...', 'scanning');
            } else {
                // No original stored, can't restore
                setStatus('Original srcArray not found, cannot restore yellow screens', 'error');
                checkbox.checked = false; // Revert checkbox
                return;
            }
        }
        
        // Update the VIDEO's document in lessons collection with modified srcArray
        await db.collection('lessons').doc(videoFilename).set({
            srcArray: updatedSrcArray,
            originalSrcArray: originalSrcArray // Ensure original is stored
        }, { merge: true });
        
        // Store yellowScreen preference in videoPaths collection
        await db.collection('videoPaths').doc(lessonId).set({
            yellowScreen: yellowScreen
        }, { merge: true });
        
        // Update local data
        const lesson = lessonsData.find(l => l.lessonId === lessonId);
        if (lesson) {
            lesson.yellowScreen = yellowScreen;
        }
        
        if (yellowScreen) {
            setStatus(`Yellow screen restored for ${lesson ? lesson.name : lessonId}`, 'success');
        }
        
        setTimeout(() => {
            setStatus('Ready');
        }, 3000);
    } catch (error) {
        console.error('Error toggling yellow screen:', error);
        alert('Error updating yellow screen setting: ' + error.message);
        checkbox.checked = previousState; // Revert checkbox
    } finally {
        checkbox.disabled = false;
    }
}

// Simple fallback method to adjust srcArray (removes very short initial segments)
function adjustSrcArraySimple(srcArray) {
    if (!srcArray || srcArray.length === 0) return srcArray;
    
    const adjusted = [];
    
    for (const segment of srcArray) {
        // Keep opening segment
        if (segment.src_start === null || segment.src_end === null) {
            adjusted.push(segment);
            continue;
        }
        
        // Remove very short segments at the start (likely yellow screens)
        const duration = segment.src_end - segment.src_start;
        if (adjusted.length === 0 && duration < 1.0) {
            // Skip first very short segment
            continue;
        }
        
        adjusted.push(segment);
    }
    
    return adjusted;
}

// Make functions available globally
window.assignVideo = assignVideo;
window.toggleYellowScreen = toggleYellowScreen;

