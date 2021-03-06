import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyDZTa4Rsy-pDla7HwXTcwkahlNE1L9HumQ",
  authDomain: "reactthreeobj.firebaseapp.com",
  projectId: "reactthreeobj",
  storageBucket: "reactthreeobj.appspot.com",
  messagingSenderId: "107856832978",
  appId: "1:107856832978:web:3a9eddbd48f6fd3321400b",
  measurementId: "G-9K01PXWCEC",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const appStorage = firebase.storage();
const appFireStore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { appStorage, appFireStore, timestamp };
