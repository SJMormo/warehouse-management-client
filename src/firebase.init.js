// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: process.env.REACT_APP_apiKey,
    // authDomain: process.env.REACT_APP_authDomain,
    // projectId: process.env.REACT_APP_projectId,
    // storageBucket: process.env.REACT_APP_storageBucket,
    // messagingSenderId: process.env.REACT_APP_messagingSenderId,
    // appId: process.env.REACT_APP_appId

    apiKey: "AIzaSyB6fWZ6PAkBWuX-W_kMPmmymvVzufzjenI",
    authDomain: "warehouse-management-sjmormo.firebaseapp.com",
    projectId: "warehouse-management-sjmormo",
    storageBucket: "warehouse-management-sjmormo.appspot.com",
    messagingSenderId: "177276098993",
    appId: "1:177276098993:web:3cc8b1dde1300948700590"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;