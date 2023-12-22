// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQ9P_F2mnfYXZCRgm_93f3YbllKgkcY4A",
  authDomain: "todomanagerapp-d3b92.firebaseapp.com",
  projectId: "todomanagerapp-d3b92",
  storageBucket: "todomanagerapp-d3b92.appspot.com",
  messagingSenderId: "16065293292",
  appId: "1:16065293292:web:7d26628799c56959232ec9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
