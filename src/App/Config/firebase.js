
import withFirebaseAuth from 'react-with-firebase-auth'
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import { initializeApp } from 'firebase/app';

export const configureFirebase = () => initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
});

export const applyFirebaseAuthAndConfigToComponent = (component) => {
    const app = configureFirebase();
    const firebaseAppAuth = app.auth();
    const providers = {
        googleProvider: new firebase.auth.GoogleAuthProvider(),
    };

    return withFirebaseAuth({
        providers,
        firebaseAppAuth,
    })(component);
};