import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB6FwTCIY425kc-olIRr7qYLzYUZEhc6pI",
  authDomain: "twitter-clone-udemy-3776e.firebaseapp.com",
  projectId: "twitter-clone-udemy-3776e",
  storageBucket: "twitter-clone-udemy-3776e.appspot.com",
  messagingSenderId: "593399017152",
  appId: "1:593399017152:web:2bd007b36afa6374004725",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
