import { initializeApp } from "firebase/app";
import {getAuth, } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAdL8NhH4bphxtl8WcsErj__H88xP7a4kw",
    authDomain: "aain-pk.firebaseapp.com",
    projectId: "aain-pk",
    storageBucket: "aain-pk.appspot.com",
    messagingSenderId: "669140650784",
    appId: "1:669140650784:web:a517cd23d37eb3b0f26545"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
 
