// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0KbGW-4znfF19ikrUahdCyd_bEungkH4",
  authDomain: "biome-865cc.firebaseapp.com",
  projectId: "biome-865cc",
  storageBucket: "biome-865cc.firebasestorage.app",
  messagingSenderId: "952652458408",
  appId: "1:952652458408:web:23e7f0689e9cf973be959d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Export the app instance in case it's needed elsewhere
export default app;

