// Temporary test code for Firestore
import { db } from './firebase-config.js';
import { doc, getDoc } from 'firebase/firestore';

// Test Firestore connection
const docRef = doc(db, "test", "hello");
getDoc(docRef).then(docSnap => {
    if (docSnap.exists()) {
        console.log("Firestore says:", docSnap.data());
    } else {
        console.log("Document does not exist");
    }
}).catch(error => {
    console.error("Error getting document:", error);
});

