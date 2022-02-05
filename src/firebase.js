import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDxy3I-NkojCdtk-xfKkifC-F8g8yuvlc0",
  authDomain: "linkedin-clone-ec2f2.firebaseapp.com",
  projectId: "linkedin-clone-ec2f2",
  storageBucket: "linkedin-clone-ec2f2.appspot.com",
  messagingSenderId: "465922716067",
  appId: "1:465922716067:web:387c330485ce8f609caa16",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
