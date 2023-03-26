// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBg2UZWv4PRNznzEwM4-96mdcjtH11YiZU",
  authDomain: "off-9d386.firebaseapp.com",
  projectId: "off-9d386",
  storageBucket: "off-9d386.appspot.com",
  messagingSenderId: "144798431245",
  appId: "1:144798431245:web:d1588c33c7ff497eab3d44",
  measurementId: "G-WEDEYT6LVD"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp