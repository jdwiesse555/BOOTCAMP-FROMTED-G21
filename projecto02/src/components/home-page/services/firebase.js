import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHkuYGnzM2I-mLefgrJlh-6_5VC7ka7kY",
  authDomain: "sist-tanques.firebaseapp.com",
  projectId: "sist-tanques",
  storageBucket: "sist-tanques.firebasestorage.app",
  messagingSenderId: "952004950930",
  appId: "1:952004950930:web:b991faf3700b0361b95f4b",
  measurementId: "G-W0KC41NKK6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
