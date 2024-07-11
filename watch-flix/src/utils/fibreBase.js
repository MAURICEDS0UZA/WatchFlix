// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjcoewb3Q4z5jI_DemrSyLVQwjkHJ4pY0",
  authDomain: "watchflix-098.firebaseapp.com",
  projectId: "watchflix-098",
  storageBucket: "watchflix-098.appspot.com",
  messagingSenderId: "187305685050",
  appId: "1:187305685050:web:90517531bc00db3ffd8503",
  measurementId: "G-15H2F44JEN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
