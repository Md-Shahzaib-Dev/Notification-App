// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyCZV6rhnHzbuwBrHqBAv8xxcddKuKsvbYA",
    authDomain: "notify-client-db165.firebaseapp.com",
    projectId: "notify-client-db165",
    storageBucket: "notify-client-db165.appspot.com",
    messagingSenderId: "82906327348",
    appId: "1:82906327348:web:6ab5319659607b70f69d61",
    measurementId: "G-CP2J25FJGH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);
export { messaging };