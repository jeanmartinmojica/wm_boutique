// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvdT4BRZAmACPhlTUrdbdNzWGPYM5n03o",
  authDomain: "wm-boutique-2a020.firebaseapp.com",
  projectId: "wm-boutique-2a020",
  storageBucket: "wm-boutique-2a020.appspot.com",
  messagingSenderId: "239144076139",
  appId: "1:239144076139:web:98e1aeb1cb425e85f5822e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);