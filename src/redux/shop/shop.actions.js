import ShopActionTypes from './shop.types';
import {firestore, convertCollectionsSnapShotToMap} from '../../firebase/firebase.utils'

export const fetchCollectionsStart = (collectionsMap)=> ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
    
});



export const fetchCollectionsSuccess = collectionsMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})

export const fetchCollectionsFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        //const {updateCollections} = this.props;
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart());
     //    fetch('https://firestore.googleapis.com/v1/projects/crown-db-9c484/databases/(default)/documents/collections')
     //    .then(response => response.json())
     //    .then(collections => console.log(collections));
    
        collectionRef.get().then(
         snapshot => {
             const collectionsMap =  convertCollectionsSnapShotToMap(snapshot);
             // dispatch(fetchCollectionsStart());
             //updateCollections(collectionsMap);
             dispatch(fetchCollectionsSuccess(collectionsMap));
             }
        ).catch(error => dispatch(fetchCollectionsFailure(error.message)));
    }
    }
