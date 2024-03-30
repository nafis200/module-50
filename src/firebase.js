// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8Zxws6Ng0CXxyuI1fFbwT3w_Cj6wBLc0",
  authDomain: "user-email-password-c78e8.firebaseapp.com",
  projectId: "user-email-password-c78e8",
  storageBucket: "user-email-password-c78e8.appspot.com",
  messagingSenderId: "293824109561",
  appId: "1:293824109561:web:6377ffb135631078f9bb28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;
// export default app;