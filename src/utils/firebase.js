// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-Z8Biw6cItaSnV2Nivz8phwQD4fBE9pg",
  authDomain: "netflix-gpt-48aae.firebaseapp.com",
  projectId: "netflix-gpt-48aae",
  storageBucket: "netflix-gpt-48aae.appspot.com",
  messagingSenderId: "660958638967",
  appId: "1:660958638967:web:ca20c3250c72ea18422772",
  measurementId: "G-VELPVJBMFG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();