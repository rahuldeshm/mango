// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZ_z-OjwJ8LrN4j6gWNpQGMSA9VIv-YWA",
  authDomain: "mango-7694c.firebaseapp.com",
  databaseURL: "https://mango-7694c-default-rtdb.firebaseio.com",
  projectId: "mango-7694c",
  storageBucket: "mango-7694c.appspot.com",
  messagingSenderId: "72614140630",
  appId: "1:72614140630:web:7191de9a30c9617e150777",
  measurementId: "G-8YS92EM7C3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
