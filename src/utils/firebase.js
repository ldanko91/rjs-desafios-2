import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBwEB0qf9gVRT5WE-mcv8QogjyeMYTB-NU",
    authDomain: "casa-danko-ecommerce.firebaseapp.com",
    projectId: "casa-danko-ecommerce",
    storageBucket: "casa-danko-ecommerce.appspot.com",
    messagingSenderId: "553744310816",
    appId: "1:553744310816:web:5bbde023127f0a21305245"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);