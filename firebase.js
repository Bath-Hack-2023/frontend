// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDb5Mb_AM-UT-tgohptoeEPtKrhmmrJqtI",
	authDomain: "bath-hack-2023.firebaseapp.com",
	projectId: "bath-hack-2023",
	storageBucket: "bath-hack-2023.appspot.com",
	messagingSenderId: "743262018506",
	appId: "1:743262018506:web:f77d27f58bd0066a0fcd33",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
