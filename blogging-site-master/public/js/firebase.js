// let firebaseConfig = {
//     // Enter your firebase credentials

// };

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// import firebase from "firebase/compat/app";
// // Required for side-effects
// import "firebase/firestore";







// const firebase=require("firebase");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig ={
  apiKey: "AIzaSyDpvD9804NrnA24QV0KLXRV002MM3_wZis",
  authDomain: "darshanblogging-999b1.firebaseapp.com",
  projectId: "darshanblogging-999b1",
  storageBucket: "darshanblogging-999b1.appspot.com",
  messagingSenderId: "868087541912",
  appId: "1:868087541912:web:31a98b923af80a83cd20ed",
  measurementId: "G-B64KKJ0V41"};


// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);



firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();
// firebase.initializeApp(firebaseConfig)
// let db = firebase.firestore();
