// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, setDoc, getDoc, doc } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAku9Wgq-8HZxkLU9QZFKwkVIHY3waZSrk",
  authDomain: "jira-af3fe.firebaseapp.com",
  projectId: "jira-af3fe",
  storageBucket: "jira-af3fe.appspot.com",
  messagingSenderId: "669744988548",
  appId: "1:669744988548:web:c3b39c0510f3cb59b11dd1",
  measurementId: "G-HWKT20J6DH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


export {
  app, auth, db, getFirestore, setDoc, getDoc, doc, onAuthStateChanged
}
