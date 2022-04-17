// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJn5iqCsUrugRwwX7skFcfuN5XyhORY2M",
  authDomain: "teachers-diary-c44be.firebaseapp.com",
  projectId: "teachers-diary-c44be",
  storageBucket: "teachers-diary-c44be.appspot.com",
  messagingSenderId: "853836233526",
  appId: "1:853836233526:web:d1aa36c8bf9272a9c41197"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth