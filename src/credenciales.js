// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8LFlIv71OFUzz3JAPhYUvzmBlRppEyFU",
  authDomain: "iph-react.firebaseapp.com",
  projectId: "iph-react",
  storageBucket: "iph-react.firebasestorage.app",
  messagingSenderId: "667998453788",
  appId: "1:667998453788:web:2a1de9bfc8c7955da81fd9"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase