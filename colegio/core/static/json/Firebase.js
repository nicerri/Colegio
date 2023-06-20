// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8vyPGWIirb77Xalgz8zkRbI3-ilKlpiA",
  authDomain: "monitoreo-escolar-514ec.firebaseapp.com",
  projectId: "monitoreo-escolar-514ec",
  storageBucket: "monitoreo-escolar-514ec.appspot.com",
  messagingSenderId: "857067346019",
  appId: "1:857067346019:web:a3e7420cfa206eeba1c056",
  measurementId: "G-W6NF86LWNK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore();