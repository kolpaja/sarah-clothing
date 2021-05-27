import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAT_TezgyTWf_0mO_wVE3UtWw6a47jlA5M",
  authDomain: "sarah-db.firebaseapp.com",
  projectId: "sarah-db",
  storageBucket: "sarah-db.appspot.com",
  messagingSenderId: "210459979462",
  appId: "1:210459979462:web:37ff85975b54dc4da631c7",
  measurementId: "G-XDK4R4LCFD",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
