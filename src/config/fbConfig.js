import firebase from "firebase/app";
// import "firebase/firestore";
// import "firebase/auth";
import conf from "./fbKey.json";

firebase.initializeApp(conf);
export default firebase;
