// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAOo_hiW_Rx7NkOWDDK1XJaZ4vRcgyLnas",
    authDomain: "evolve-ab0c1.firebaseapp.com",
    projectId: "evolve-ab0c1",
    storageBucket: "evolve-ab0c1.appspot.com",
    messagingSenderId: "1049312333870",
    appId: "1:1049312333870:web:9a354b8dc2f129f5b98fbf",
    measurementId: "G-WMQ56Q8NM9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export const firebaseStorage = getStorage();

export { auth };