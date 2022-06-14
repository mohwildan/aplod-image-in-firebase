// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDe6HBTE9-J6TURBZ5XO6lDrYHdrpqgmXk",
  authDomain: "redit-clone-4c382.firebaseapp.com",
  projectId: "redit-clone-4c382",
  storageBucket: "redit-clone-4c382.appspot.com",
  messagingSenderId: "1083002790364",
  appId: "1:1083002790364:web:bf0985a81a159eb5326f19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 

export const storage = getStorage(app)