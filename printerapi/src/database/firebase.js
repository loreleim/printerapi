import firebase from "firebase";

const config = {
  apiKey: "AIzaSyAWJeSX-op_GCGw96E2Yqs9cwFpQg8EEzQ",
  authDomain: "printerapi-7e3b2.firebaseapp.com",
  databaseURL: "https://printerapi-7e3b2.firebaseio.com",
  projectId: "printerapi-7e3b2",
  storageBucket: "printerapi-7e3b2.appspot.com",
  messagingSenderId: "1030323620937",
  appId: "1:1030323620937:web:eb6ba7adb5c3284f1e8398",
  measurementId: "G-PKEJ5J2WED",
};

firebase.initializeApp(config);
export default firebase;
