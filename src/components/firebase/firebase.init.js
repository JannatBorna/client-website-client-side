import { initializeApp } from "firebase/app";
import firebaseConfig from './../firebase/firebase.config';


const firebaseInitialize = () => {
    initializeApp(firebaseConfig);
}

export default firebaseInitialize;
