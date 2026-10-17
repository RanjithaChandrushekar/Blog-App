// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDKXfLhSvUiY-aGZsRmiCtZEhooCtVCsY4",
  authDomain: "bolg-app-ranju.firebaseapp.com",
  projectId: "bolg-app-ranju",
  storageBucket: "bolg-app-ranju.firebasestorage.app",
  messagingSenderId: "859407122311",
  appId: "1:859407122311:web:94baa4884437228b105d22",
  measurementId: "G-X5CJJ82ZX2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth