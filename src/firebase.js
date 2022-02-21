/* 
  This is the Firebase SDK 
  configuration.

  Note: Firebase SDK was used instead
  of AXIOS, VUE-RESOURCE AND NATIVE FETCH
  due to the Google Cloud CORS Policy (ACCESS BLOCK)
   */

  import * as firebase from "firebase/app";
  import "firebase/auth"
  import store from "./store";

  const firebaseConfig = {
    apiKey: "AIzaSyATABMFHYn2rupQUzR5WVd-G0w12v0gfP0",
    authDomain: "huntrjob.firebaseapp.com",
    databaseURL: "https://huntrjob.firebaseio.com",
    projectId: "huntrjob",
    storageBucket: "huntrjob.appspot.com",
    messagingSenderId: "843392944676",
    appId: "1:843392944676:web:678f0ef90d2847cde2e6b1",
    measurementId: "G-1BFJXY5GP9"
  };
  
  let fb = firebase.initializeApp(firebaseConfig);

 

  
  export default fb;