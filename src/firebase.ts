// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
/* import { getAnalytics } from "firebase/analytics"; */
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDkF1d8s4jXmfLPf74n5u2-fGRsQBnZII0",
  authDomain: "react-auth-test-40a50.firebaseapp.com",
  projectId: "react-auth-test-40a50",
  storageBucket: "react-auth-test-40a50.appspot.com",
  messagingSenderId: "603296934495",
  appId: "1:603296934495:web:d3a5e94d99d4fb740149ea",
  measurementId: "G-X3GPPBJ0FX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
