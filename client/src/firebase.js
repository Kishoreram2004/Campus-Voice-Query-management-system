// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "campusvoicequerymanagementsys.firebaseapp.com",
  projectId: "campusvoicequerymanagementsys",
  storageBucket: "campusvoicequerymanagementsys.firebasestorage.app",
  messagingSenderId: "940875126623",
  appId: "1:940875126623:web:7df2de97e1fe5a47c5c8ea",
  measurementId: "G-9RYP8FJXSM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

