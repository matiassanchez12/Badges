import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyArfOPSvYWuUyFwlmrLP7S-zYYkR5mA8NY',
  authDomain: 'platzi-badges-d4aca.firebaseapp.com',
  databaseURL: 'https://platzi-badges-d4aca.firebaseio.com',
  projectId: 'platzi-badges-d4aca',
  storageBucket: 'platzi-badges-d4aca.appspot.com',
  messagingSenderId: '790416980876',
  appId: '1:790416980876:web:65465c663eb02d31ad34a9',
};
// Initialize Firebase
const fireb = firebase.initializeApp (firebaseConfig);

export const db = fireb.firestore ();
