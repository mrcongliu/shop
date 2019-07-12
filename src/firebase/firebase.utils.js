import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDPb_Rn1ETiJ0jQGTBhjLlXoiQ7hWGIvbw",
  authDomain: "shop-e86d3.firebaseapp.com",
  databaseURL: "https://shop-e86d3.firebaseio.com",
  projectId: "shop-e86d3",
  storageBucket: "",
  messagingSenderId: "412866292582",
  appId: "1:412866292582:web:5f1289b59d1c287f"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
