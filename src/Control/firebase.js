import { initializeApp } from "firebase/app";
import { getDatabase  } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBwuORWE2mKOwvaXHf5P3rv7ZiN4gfWl04",
    authDomain: "proyectort-e5540.firebaseapp.com",
    databaseURL: "https://proyectort-e5540-default-rtdb.firebaseio.com",
    projectId: "proyectort-e5540",
    storageBucket: "proyectort-e5540.appspot.com",
    messagingSenderId: "761199424049",
    appId: "1:761199424049:web:e9dc6f65c7c9aad3505b10",
    measurementId: "G-N7DJYSY3N2"
  };

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);

