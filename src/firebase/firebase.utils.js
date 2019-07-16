import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBdvpzedt5rokvJ7AyzbcXPb5QI2nqrC54",
  authDomain: "shop-316ed.firebaseapp.com",
  databaseURL: "https://shop-316ed.firebaseio.com",
  projectId: "shop-316ed",
  storageBucket: "",
  messagingSenderId: "304724189902",
  appId: "1:304724189902:web:6772511a116f66be"
};

/* send a query to firebase */
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  /* check if there is a user in that database, if there isn't, create a user using the data from userAuth object. */
  if (!snapShot.exits) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  /* In case we want to use it. */
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
