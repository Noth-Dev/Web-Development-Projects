
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC7_jo9Nkt4lOlTrws_LDB0u-7D0yBKi4I",
  authDomain: "docsclone-a70db.firebaseapp.com",
  projectId: "docsclone-a70db",
  storageBucket: "docsclone-a70db.appspot.com",
  messagingSenderId: "431983253189",
  appId: "1:431983253189:web:43e61a51e5c1bd0faa02ac"
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)