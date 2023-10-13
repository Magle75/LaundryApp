import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDdnUvqBAvru9S3R8iptBUc9P-eadHV3f0",

  authDomain: "bantuyukapp.firebaseapp.com",

  projectId: "bantuyukapp",

  storageBucket: "bantuyukapp.appspot.com",

  messagingSenderId: "668697791387",

  appId: "1:668697791387:web:98da99f7470488b5c22f3e",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export { auth, db };
