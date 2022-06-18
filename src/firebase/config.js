import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCNy2snC_bCfcOo9Zb9ax_dASdyznIu64A",
  authDomain: "cooking-ninja-site-5afff.firebaseapp.com",
  projectId: "cooking-ninja-site-5afff",
  storageBucket: "cooking-ninja-site-5afff.appspot.com",
  messagingSenderId: "299926857705",
  appId: "1:299926857705:web:48f8b582d0ce3341d20d78"
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore()

export { projectFirestore } 