import firebase from "firebase/app";
import conf from "./fbKey.json";

firebase.initializeApp(conf);
export default firebase;
