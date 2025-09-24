import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,

  authDomain: "task-manager-d33d0.firebaseapp.com",

  projectId: "task-manager-d33d0",

  storageBucket: "task-manager-d33d0.firebasestorage.app",

  messagingSenderId: "302868122054",

  appId: "1:302868122054:web:9c1a9eed9fb94eb7c8cac7"

};

export const app = initializeApp(firebaseConfig);
