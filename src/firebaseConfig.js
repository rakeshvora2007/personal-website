import firebase from 'firebase/app';
import 'firebase/storage';  // If using Firebase storage

const firebaseConfig = {
    apiKey: "AIzaSyAwwuCgn4uWGwXpbkTEN1zLC1KPk_bYTpk",
    authDomain: "personal-website-f8d5d.firebaseapp.com",
    databaseURL: "https://personal-website-f8d5d.firebaseio.com",
    projectId: "personal-website-f8d5d",
    storageBucket: "personal-website-f8d5d.appspot.com",
    messagingSenderId: "470574354851",
    appId: "1:470574354851:web:01112a930dc500203cca16",
    measurementId: "G-RYDJMBYBR6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;