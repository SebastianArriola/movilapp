import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBoAo88UVdS5nYFqa8Y4vpu1P040xRf1D4",
  authDomain: "tenedores-34e59.firebaseapp.com",
  projectId: "tenedores-34e59",
  storageBucket: "tenedores-34e59.appspot.com",
  messagingSenderId: "14642846524",
  appId: "1:14642846524:web:73968c0fa5aa26df925c39"
};

export const initFirebase = initializeApp(firebaseConfig);