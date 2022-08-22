
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyAGds8BVNDHtb5LHwQmFS-w1je-imuheOQ",
    authDomain: "daniel-portifolio.firebaseapp.com",
    projectId: "daniel-portifolio",
    storageBucket: "daniel-portifolio.appspot.com",
    messagingSenderId: "807051787826",
    appId: "1:807051787826:web:d8c6bf52087812fc60c62b",
    measurementId: "G-5RH8RZF9R9"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// Get a reference to the auth service
const provider = new GoogleAuthProvider();
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);
export const signInWithGoogle = () => firebase.signInWithPopup(auth, provider);

