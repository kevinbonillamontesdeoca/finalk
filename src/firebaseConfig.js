import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBloRoNj8EnHZEQ5BIIhytKSIigQ3O9MGE",
  authDomain: "zonagames-a53d1.firebaseapp.com",
  projectId: "zonagames-a53d1",
  storageBucket: "zonagames-a53d1.appspot.com",
  messagingSenderId: "522885855550",
  appId: "1:522885855550:web:dc89ef8c28f34af001146f",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
