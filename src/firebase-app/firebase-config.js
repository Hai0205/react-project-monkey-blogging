import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAEQnXuo0_mdbqCP9G5nwU9JLO2VhW8Sc4",
  authDomain: "monkey-blogging-4379c.firebaseapp.com",
  projectId: "monkey-blogging-4379c",
  storageBucket: "monkey-blogging-4379c.appspot.com",
  messagingSenderId: "114752812274",
  appId: "1:114752812274:web:18500846c8e70d2a830c6b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
