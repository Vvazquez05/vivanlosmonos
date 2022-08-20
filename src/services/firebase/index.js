// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA4uNXzQuJBXmo5zK3caao72Y3wszvFV6g",
    authDomain: "backend-appvivanlosmonos.firebaseapp.com",
    projectId: "backend-appvivanlosmonos",
    storageBucket: "backend-appvivanlosmonos.appspot.com",
    messagingSenderId: "433056053282",
    appId: "1:433056053282:web:b0d56b82ad859ee1d5b27b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)