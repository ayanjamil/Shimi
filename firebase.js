import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import Constants from "expo-constants";
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
export const auth = getAuth();
export const db = getFirestore(app);

// export { app };
// export const db = getFirestore(initializeApp(firebaseConfig));
