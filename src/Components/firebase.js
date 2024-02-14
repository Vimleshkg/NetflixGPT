
import { getAuth} from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2HN8ygdvYAimxavjjs2zru_2qM0sFQYA",
  authDomain: "smartnetflix-4d2b2.firebaseapp.com",
  projectId: "smartnetflix-4d2b2",
  storageBucket: "smartnetflix-4d2b2.appspot.com",
  messagingSenderId: "984291499588",
  appId: "1:984291499588:web:36de069709346f57e3a611"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();