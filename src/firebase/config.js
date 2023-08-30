import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDQ_Kfh4g93HsRWfHDASeODElBt2bF2Quk",
    authDomain: "fir-f6960.firebaseapp.com",
    projectId: "fir-f6960",
    storageBucket: "fir-f6960.appspot.com",
    messagingSenderId: "812778165066",
    appId: "1:812778165066:web:3267684494466bc5de27b3",
    measurementId: "G-18TVP0XGKK"
  };

  export default  firebase.initializeApp(firebaseConfig)