import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyBgoRGIr2HK4Cysd9ISjxYRaS6og_n9eww",
  authDomain: "badges-5dca6.firebaseapp.com",
  projectId: "badges-5dca6",
  storageBucket: "badges-5dca6.appspot.com",
  messagingSenderId: "1050554038458",
  appId: "1:1050554038458:web:1719ca9ba811ab210b6a83"
};
// Initialize Firebase
const fireb = firebase.initializeApp (firebaseConfig);

export const db = fireb.firestore ();
