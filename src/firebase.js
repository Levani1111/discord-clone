// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCBFHRwYRkXY4Epy48HdtfDqKSnwgGXvSk",
  authDomain: "discord-clone-5b0f6.firebaseapp.com",
  databaseURL: "https://discord-clone-5b0f6.firebaseio.com",
  projectId: "discord-clone-5b0f6",
  storageBucket: "discord-clone-5b0f6.appspot.com",
  messagingSenderId: "659757142716",
  appId: "1:659757142716:web:2fb2a7c1c0bcba49daf6b9",
  measurementId: "G-PJHGBN8XQ1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
