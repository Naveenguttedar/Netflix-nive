// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRn-zsIPR3xojmkiSR1XJsXIpzJomVrR4",
  authDomain: "gifted-electron-314118.firebaseapp.com",
  projectId: "gifted-electron-314118",
  storageBucket: "gifted-electron-314118.appspot.com",
  messagingSenderId: "894290279092",
  appId: "1:894290279092:web:b6bdfa767c94efe1b075e1",
  measurementId: "G-M7E3W5MN4C"
  // apiKey: import.meta.env.VITE_API_KEY,
  // authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  // projectId: import.meta.env.VITE_PROJECT_ID,
  // storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  // messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  // appId: "1:894290279092:web:b6bdfa767c94efe1b075e1",
  // measurementId: "G-M7E3W5MN4C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app);
export const auth = getAuth(app)