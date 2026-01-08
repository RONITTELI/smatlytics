import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD77t6LXpg5xv6fIQZiRYTPi5I_A2VGY50",
  authDomain: "smartlytics-b6bf6.firebaseapp.com",
  projectId: "smartlytics-b6bf6",
  storageBucket: "smartlytics-b6bf6.firebasestorage.app",
  messagingSenderId: "695479734700",
  appId: "1:695479734700:web:8ccf0b2b564a47b92fea09"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
