// Import the functions you need from the SDKs you need
const firebaseConfig = {
  apiKey: "AIzaSyCxFUEeo2aB-Jxu8qGh6ckjfu7lN64QLzY",
  authDomain: "ludo-online-658cf.firebaseapp.com",
  databaseURL: "https://ludo-online-658cf-default-rtdb.firebaseio.com",
  projectId: "ludo-online-658cf",
  storageBucket: "ludo-online-658cf.firebasestorage.app",
  messagingSenderId: "42961865411",
  appId: "1:42961865411:web:59709288c0ac690fdbb076",
  measurementId: "G-0V421J17Y2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();