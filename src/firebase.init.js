// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQc1Nfh_ET6AXGmGi2YWnRxGWB5fuRZBc",
  authDomain: "dental-care-f051f.firebaseapp.com",
  projectId: "dental-care-f051f",
  storageBucket: "dental-care-f051f.appspot.com",
  messagingSenderId: "1077775126295",
  appId: "1:1077775126295:web:7a10798f919de0bd64b152"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
