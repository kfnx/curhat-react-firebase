import firebase from 'firebase/app'
import "firebase/firestore"
import "firebase/auth"
// firebase configuration variables
import { conf } from "./fbKey"
firebase.initializeApp(conf);
export default firebase