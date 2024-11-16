import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA-y6vmd4lVS_2v7WaEijlSHv9nXrYmMaM",
  authDomain: "anime-community-ae84b.firebaseapp.com",
  projectId: "anime-community-ae84b",
  storageBucket: "anime-community-ae84b.firebasestorage.app",
  messagingSenderId: "414495020635",
  appId: "1:414495020635:web:10f2720080f1cce8cb117e",
  measurementId: "G-38NXRC2CDW",
  databaseURL: "https://anime-community-ae84b-default-rtdb.firebaseio.com"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);