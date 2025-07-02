// Import the functions you need from the SDKs you need
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbMfy2YqDw1k0aPF5MigCeLQNEztEA5f8",
  authDomain: "mytodo-2a796.firebaseapp.com",
  projectId: "mytodo-2a796",
  storageBucket: "mytodo-2a796.firebasestorage.app",
  messagingSenderId: "341836377611",
  appId: "1:341836377611:web:7ff141793b30ffa698610e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const FirebasAuth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export const db = getFirestore(app);
