// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQrvHZdOm2P9I9GZiLUtLznpG9P_ZVcgA",
  authDomain: "conseptual-session-two.firebaseapp.com",
  projectId: "conseptual-session-two",
  storageBucket: "conseptual-session-two.firebasestorage.app",
  messagingSenderId: "716409919700",
  appId: "1:716409919700:web:13e3c3ab541294aff58341"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default(auth)