// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkQztzd3-JGo7L2PXEue69vgmD5Z3nDwI",
  authDomain: "project001-df3bf.firebaseapp.com",
  projectId: "project001-df3bf",
  storageBucket: "project001-df3bf.appspot.com",
  messagingSenderId: "833093881026",
  appId: "1:833093881026:web:4dc95d12fcba941c147f5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;
