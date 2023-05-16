// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmQSO9YYFiZOqF2XP3BSVx3FMQJJnVpj4",
  authDomain: "car-doctor-3f9f7.firebaseapp.com",
  projectId: "car-doctor-3f9f7",
  storageBucket: "car-doctor-3f9f7.appspot.com",
  messagingSenderId: "459096579677",
  appId: "1:459096579677:web:c6b139be0cdd79bce877b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;