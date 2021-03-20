const firebase = require("firebase/app",); 
var admin = require("firebase-admin")

const firebaseConfig = {
    apiKey: "AIzaSyDhXsI95dNWf-UY3zquJCrp-RKHGv7hX10",
    authDomain: "celu-max.firebaseapp.com",
    projectId: "celu-max",
    storageBucket: "celu-max.appspot.com",
    messagingSenderId: "272439080459",
    appId: "1:272439080459:web:9d07b805d13411793af90e"
  };

firebase.initializeApp(firebaseConfig);




module.exports = firebase
