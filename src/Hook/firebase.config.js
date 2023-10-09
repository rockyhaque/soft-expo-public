// Import the functions you need from the SDKs you need
import { defaults } from "autoprefixer";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD49Ak8NqiiT9UI7nO40Wjkd6JnVVH0wlc",
  authDomain: "soft-expo.firebaseapp.com",
  projectId: "soft-expo",
  storageBucket: "soft-expo.appspot.com",
  messagingSenderId: "699267163162",
  appId: "1:699267163162:web:aab1c8f31ebaf835721da3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;