import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

    apiKey: "AIzaSyDyViedX7kcS6SLS6zKJD09zJEcrsKUMFE",
    authDomain: "lostandfoundiiitdmj.firebaseapp.com",
    projectId: "lostandfoundiiitdmj",
    storageBucket: "lostandfoundiiitdmj.appspot.com",
    messagingSenderId: "46725157701",
    appId: "1:46725157701:web:5683c7b8613bd5b7bd242c",
    measurementId: "G-K0QS3HY5LG"
};


export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
const analytics = getAnalytics(app);