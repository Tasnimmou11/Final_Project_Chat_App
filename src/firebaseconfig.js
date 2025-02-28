
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQ_WevXqozuy3dbXRD45P21H-LJvE3ZoE",
  authDomain: "chat-app-f5e06.firebaseapp.com",
  projectId: "chat-app-f5e06",
  storageBucket: "chat-app-f5e06.firebasestorage.app",
  messagingSenderId: "181279898310",
  appId: "1:181279898310:web:9320c72cd9f777f6fb35c7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const firebaseApp = auth;
export default firebaseApp;