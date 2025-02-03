// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "let-s-blog-ea314.firebaseapp.com",
  projectId: "let-s-blog-ea314",
  storageBucket: "let-s-blog-ea314.appspot.com",
  messagingSenderId: "1030674887794",
  appId: "1:1030674887794:web:8545338eb1cd19749abeeb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);