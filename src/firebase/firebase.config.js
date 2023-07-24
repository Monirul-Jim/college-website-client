// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOIdXF9_1pT-dk-VhX5Z4nh8Qn7QBlQZA",
  authDomain: "college-website-ee970.firebaseapp.com",
  projectId: "college-website-ee970",
  storageBucket: "college-website-ee970.appspot.com",
  messagingSenderId: "579759799250",
  appId: "1:579759799250:web:19a168cf37c442b40e660b",
  measurementId: "G-1YC90PZNK9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;