import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDDksTO4EiZgsE59mpUb5fJUdde7PXI7n8",
  authDomain: "project01-11d32.firebaseapp.com",
  databaseURL: "https://project01-11d32-default-rtdb.firebaseio.com",
  projectId: "project01-11d32",
  storageBucket: "project01-11d32.appspot.com",
  messagingSenderId: "275874528788",
  appId: "1:275874528788:web:ed1155ce98f56bd035f101"
};

firebase.initializeApp(firebaseConfig);
//firebase.firestore();
const firestore = firebase.firestore();
const settings = {
  timestampsInSnapshots: true
};
firestore.settings(settings);
export default firebase;
