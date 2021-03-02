import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDjGSD0Sx58hvQLFe5OqqBKspwbe05oBTg",
    authDomain: "crown-db-9c484.firebaseapp.com",
    projectId: "crown-db-9c484",
    storageBucket: "crown-db-9c484.appspot.com",
    messagingSenderId: "593524359751",
    appId: "1:593524359751:web:bb1e155a0b25d2caf8e762",
    measurementId: "G-ZM37C75TNF"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider  = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;