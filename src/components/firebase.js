import {initializeApp} from "firebase/app"
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyC9oCj7TKVjMFX_wC7fOhQFMNQNSwpjiWE",
    authDomain: "e-musawwiq.firebaseapp.com",
    projectId: "e-musawwiq",
    storageBucket: "e-musawwiq.appspot.com",
    messagingSenderId: "931339079403",
    appId: "1:931339079403:web:bfe933921b9e775bf7b8ae",
    measurementId: "G-RWWH8VQB5T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
// database.settings({ experimentalForceLongPolling: true })
// firebase.firestore().settings({ experimentalForceLongPolling: true });

export default database;