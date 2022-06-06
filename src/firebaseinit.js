// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, collection, getDocs } from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5UoRVf_Q8sJEexL0omZlQwUdbXFBQmcM",
  authDomain: "portal-inmobiliaria.firebaseapp.com",
  projectId: "portal-inmobiliaria",
  storageBucket: "portal-inmobiliaria.appspot.com",
  messagingSenderId: "537337968744",
  appId: "1:537337968744:web:572de90f57935e0f74a3dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Get a list of casas from your database
export async function getCasas(db) {
  const casasCol = collection(db, 'casas');
  const casaSnapshot = await getDocs(casasCol);
  const casaList = casaSnapshot.docs.map(doc => doc.data());
  return casaList;
}



