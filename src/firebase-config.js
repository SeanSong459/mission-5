// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD_L83zvP9I0zNYwj3o1Arsrvk0BCiXLb8",
  authDomain: "mission-5-84409.firebaseapp.com",
  projectId: "mission-5-84409",
  storageBucket: "mission-5-84409.appspot.com",
  messagingSenderId: "508101067565",
  appId: "1:508101067565:web:a5d48946954d2797d709a4",
  measurementId: "G-89QG602P9S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const authentication = getAuth(app);

export const db = getFirestore(app);
