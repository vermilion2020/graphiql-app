// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from 'firebase/app';
import { Auth, getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
};

let app = {} as FirebaseApp;
let auth = {} as Auth;
let authError: string | null = null;

try {
  // Initialize Firebase
  app = initializeApp(firebaseConfig);
  // Initialize Firebase Authentication and get a reference to the service
  auth = getAuth(app);
} catch (e) {
  authError = e as string;
}

export { auth, authError };
export default app;
