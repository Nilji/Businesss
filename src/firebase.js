// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzaSOUNsZaVYbU-oHs4Nec65PNLU1uDrk",
  authDomain: "ai-web-5db26.firebaseapp.com",
  projectId: "ai-web-5db26",
  storageBucket: "ai-web-5db26.firebasestorage.app",
  messagingSenderId: "106860509139",
  appId: "1:106860509139:web:5e07d0e6f9d3270e772126",
  measurementId: "G-8DXGGRBSHL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);