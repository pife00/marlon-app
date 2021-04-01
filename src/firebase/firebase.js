import firebase from 'firebase/app'
import 'firebase/storage';
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDhXsI95dNWf-UY3zquJCrp-RKHGv7hX10",
    authDomain: "celu-max.firebaseapp.com",
    projectId: "celu-max",
    storageBucket: "celu-max.appspot.com",
    messagingSenderId: "272439080459",
    appId: "1:272439080459:web:9d07b805d13411793af90e"
  };
  // Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

 export default fb;

  



  