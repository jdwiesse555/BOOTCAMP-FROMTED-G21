import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAyOvIWrFlVyacrkTwBtsiRrmpuAPRAxCI",
  authDomain: "heroes-crud-e5eb5.firebaseapp.com",
  projectId: "heroes-crud-e5eb5",
  storageBucket: "heroes-crud-e5eb5.appspot.com",
  messagingSenderId: "1053936089651",
  appId: "1:1053936089651:web:0b58acbfda420205cf8146"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)