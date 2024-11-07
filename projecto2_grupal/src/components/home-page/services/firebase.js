import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBa8H6JNE2l0Iz28vqnhVD0TtdHLmd544U",
  authDomain: "sist-tanques.firebaseapp.com",
  projectId: "sist-tanques",
  storageBucket: "sist-tanques.appspot.com",
  messagingSenderId: "952004950930",
  appId: "1:952004950930:web:fcd0323e6a1a3f29b95f4b",
  measurementId: "G-8V5HX83BVF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
