// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgUd7HpqZkpv2gns_aAjnJ68eLDwqmwk4",
  authDomain: "react-cursos-f7f67.firebaseapp.com",
  projectId: "react-cursos-f7f67",
  storageBucket: "react-cursos-f7f67.appspot.com",
  messagingSenderId: "698434062616",
  appId: "1:698434062616:web:07e69c44904b915360f66d"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );