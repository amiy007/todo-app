import firebase from "@firebase/app";
import "@firebase/firestore";

const config = {
  apiKey:"AIzaSyBHCPHo2rcVUH6_1TjU6pNEQh0aEkpkEPE",
  authDomain: "todo-app-fab84.firebaseapp.com",
  databaseURL: "https://console.firebase.google.com/u/0/project/todo-app-fab84/database",
  projectId: "todo-app-fab84",
  storageBucket: "",
  messagingSenderId: "240415094918"
};

const app = firebase.initializeApp(config);
const firestore = firebase.firestore(app);

export default firestore;