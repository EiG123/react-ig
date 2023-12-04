
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAXchnMN1ia85bWKcG0WW6NlEP_KNtSbQg",
  authDomain: "ig-clone-acf31.firebaseapp.com",
  projectId: "ig-clone-acf31",
  storageBucket: "ig-clone-acf31.appspot.com",
  messagingSenderId: "840742778851",
  appId: "1:840742778851:web:c194f95209452f68e3d2d6"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();