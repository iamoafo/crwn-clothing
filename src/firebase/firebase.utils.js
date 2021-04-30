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





export const createUserProfileDocument = async (userAuth, additionalData) =>{
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const{displayName,email} = userAuth;
        const createdAt = new Date();

        try{
        await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
        })    
        }
        catch(error){
          console.log('error creating user',error.message);
        }
    }

    return userRef;

    
};

export const addCollectionandDocuments = async (collectionkey, objectsToAdd) =>{
    const collectionRef = firestore.collection(collectionkey);

    const batch = firestore.batch();

    objectsToAdd.forEach(obj =>{
        const newDocRef = collectionRef.doc();
         batch.set(newDocRef,obj);
    })
    return await batch.commit()
};


export const convertCollectionsSnapShotToMap = (collections) => {

    const transformedCollection = collections.docs.map(doc => {
        const {title,items} = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id:doc.id,
            title,
            items
        }
    });
    return transformedCollection.reduce((accumulator,collection)=>{
        accumulator[collection.title.toLowerCase()]=collection;
        return accumulator;
    },{})
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider  = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;