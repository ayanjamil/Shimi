// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrcLMbeWfPvHwAfGMtNDM8NonUH5l4yGY",
  authDomain: "shimi-1c1e8.firebaseapp.com",
  projectId: "shimi-1c1e8",
  storageBucket: "shimi-1c1e8.appspot.com",
  messagingSenderId: "904122348831",
  appId: "1:904122348831:web:215dc6b0f0a5104a002c2a",
  measurementId: "G-C56NV5V0ZZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
