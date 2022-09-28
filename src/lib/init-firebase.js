
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyAHN88_MS9XFn2r87m9of3yyAQrvY_0_aw",
authDomain: "react-firestore-for-web.firebaseapp.com",
projectId: "react-firestore-for-web",
storageBucket: "react-firestore-for-web.appspot.com",
messagingSenderId: "33574637531",
appId: "1:33574637531:web:130c6dab5611fbbaf3a1fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db;