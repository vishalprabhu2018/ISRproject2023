// firebase imports
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBIegnl7v3e9J50vFoCL16vRj54QTT-92k",
  authDomain: "isr3-3963b.firebaseapp.com",
  databaseURL: "https://isr3-3963b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "isr3-3963b",
  storageBucket: "isr3-3963b.appspot.com",
  messagingSenderId: "18139931012",
  appId: "1:18139931012:web:79a7176ba049cd4fbdbdd1",
  measurementId: "G-7KWH9YPPNY"
};

// initialize firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore();


export { app, analytics, auth, storage, db };
