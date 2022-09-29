import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAxEwtogU0uHgAyDA8MhfHUgrPDq9eISvM",
  authDomain: "personal-website-e134b.firebaseapp.com",
  databaseURL:
    "https://personal-website-e134b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "personal-website-e134b",
  storageBucket: "personal-website-e134b.appspot.com",
  messagingSenderId: "749887340552",
  appId: "1:749887340552:web:8eccde3eb44595dd08d1bd",
  measurementId: "G-SH2BM5JXHL",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const storage = getStorage();
