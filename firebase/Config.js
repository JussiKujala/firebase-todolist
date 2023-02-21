import {initializeApp} from "firebase/app";
import {getDatabase} from "firebase/database";

const firebaseConfig = ({
    apiKey: "AIzaSyChTufzJ8-8K2KMBS6MKBM1e7OUZ9eNueI",
    authDomain: "react-native-firebase-de-7aada.firebaseapp.com",
    projectId: "react-native-firebase-de-7aada",
    storageBucket: "react-native-firebase-de-7aada.appspot.com",
    messagingSenderId: "771930646550",
    databaseURL: "https://react-native-firebase-de-7aada-default-rtdb.europe-west1.firebasedatabase.app",
    appId: "1:771930646550:web:92d36553fb043ccc0c2d37"
});

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const TODOS_REF = '/todos/';