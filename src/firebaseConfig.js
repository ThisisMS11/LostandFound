import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCJbKF_-ined5VjVXD3NX4iykjY_0tYFIk",
    authDomain: "lostandfound-86eb6.firebaseapp.com",
    projectId: "lostandfound-86eb6",
    storageBucket: "lostandfound-86eb6.appspot.com",
    messagingSenderId: "934400339029",
    appId: "1:934400339029:web:c944a97fe139560c4ff8dc",
    measurementId: "G-JS1XDLWVM7"
};


export const app = initializeApp(firebaseConfig);
export const database=getFirestore(app);
const analytics = getAnalytics(app);