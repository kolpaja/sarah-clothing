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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error while creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const addCollectionsAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);

    console.log(newDocRef);
  });

  return await batch.commit();
};

//this fnx  using snapshot to map over the data of the collections at db to convert it to a object instead of an array
export const convertCollectionsSnapshopToMap = (collections) => {
  const transformedCollections = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollections.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((res, rej) => {
    const unSubscribe = auth.onAuthStateChanged((userAuth) => {
      unSubscribe();
      res(userAuth);
    }, rej);
  });
};
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
