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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
