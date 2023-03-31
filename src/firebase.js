import firebase from "firebase/compat/app"
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAy41ET4QXfJLENDUwM6yrixflj800QzgI",
    authDomain: "netflix-clone-db34c.firebaseapp.com",
    projectId: "netflix-clone-db34c",
    storageBucket: "netflix-clone-db34c.appspot.com",
    messagingSenderId: "564139639775",
    appId: "1:564139639775:web:9eddce3201e680b4cf7a6a"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};
export default db ;


