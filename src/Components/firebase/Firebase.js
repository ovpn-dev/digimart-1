// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0TDyoyBCEyI9bMqaHoZrGoZgChKf9g4I",
  authDomain: "digimart-e7852.firebaseapp.com",
  projectId: "digimart-e7852",
  storageBucket: "digimart-e7852.appspot.com",
  messagingSenderId: "150270330772",
  appId: "1:150270330772:web:9780436f6a105035e17181",
  measurementId: "G-RPW8HDM81K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);