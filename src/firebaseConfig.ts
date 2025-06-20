// firebaseConfig.ts

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // ⬅️ Tambahkan ini

const firebaseConfig = {
  apiKey: "AIzaSyBI6P-NUmv8QG3-eXJjS7QKS66y5HK5xKw",
  authDomain: "techquiz-kids.firebaseapp.com",
  projectId: "techquiz-kids",
  storageBucket: "techquiz-kids.firebasestorage.app",
  messagingSenderId: "1047086376306",
  appId: "1:1047086376306:web:139d0e1d1610c9b4bea9eb",
  measurementId: "G-QC15NM57HM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Tambahkan ini agar bisa digunakan di file lain
export const db = getFirestore(app);
