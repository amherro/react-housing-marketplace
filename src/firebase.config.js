import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjcjNRHk6iWsGMNPcRSmuk1e6eot81guI",
  authDomain: "house-marketplace-app-b535a.firebaseapp.com",
  projectId: "house-marketplace-app-b535a",
  storageBucket: "house-marketplace-app-b535a.appspot.com",
  messagingSenderId: "990781773274",
  appId: "1:990781773274:web:8588ea3e83d1980984dce3"
};

// Initialize Firebase
export const db = getFirestore()