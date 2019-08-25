// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/firestore";
import "firebase/auth";

//Initialize Firebase project configuration
const config = {
  apiKey: "AIzaSyBdvpzedt5rokvJ7AyzbcXPb5QI2nqrC54",
  authDomain: "shop-316ed.firebaseapp.com",
  databaseURL: "https://shop-316ed.firebaseio.com",
  projectId: "shop-316ed",
  storageBucket: "",
  messagingSenderId: "304724189902",
  appId: "1:304724189902:web:6772511a116f66be"
};

// Send a query to firebase.
// Because it's an API call, it's async.
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  /* use the uid get back from firebase */
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  /* we need the exists value of snapShot */
  const snapShot = await userRef.get();

  // check if there is a user in that database, if there isn't,
  // create a user using the data from userAuth object.
  if (!snapShot.exits) {
    /*create name, email*/
    const { displayName, email } = userAuth;
    /*create a time stamp of when this was evoked */
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

  /* we want to use it in App.js. */
  return userRef;
};

//Initialize Firebase
firebase.initializeApp(config);

//firebase recap and improvement
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

//in case use them outside
export const auth = firebase.auth();
export const firestore = firebase.firestore();

//Create an instance of the Google provider object from auth library
const provider = new firebase.auth.GoogleAuthProvider();
//show up the UI of select account
provider.setCustomParameters({ prompt: "select_account" });
//To sign in with a pop-up window, call signInWithPopup
//Authenticate with Firebase using the Google provider object.
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// in case we want to use the whole firebase library outside
export default firebase;
