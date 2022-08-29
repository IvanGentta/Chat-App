// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOkai-zST9eLnLbQkPJio3dLELNpvsVfo",
  authDomain: "chat-app-64402.firebaseapp.com",
  projectId: "chat-app-64402",
  storageBucket: "chat-app-64402.appspot.com",
  messagingSenderId: "17103607007",
  appId: "1:17103607007:web:be2066f336485b7369c56a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
