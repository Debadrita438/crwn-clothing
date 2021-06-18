import ShopActionTypes from './shopActionTypes';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/Firebase';

export const fetchCollectionStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTION_START
});

export const fetchCollectionSuccess = collectionsMap => ({
    type: ShopActionTypes.FETCH_COLLECTION_SUCCESS,
    payload: collectionsMap
});

export const fetchCollectionFailure = error => ({
    type: ShopActionTypes.FETCH_COLLECTION_FAILURE,
    payload: error
})

export const fetchCollectionAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionStart());

        collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            dispatch(fetchCollectionSuccess(collectionsMap));
        }).catch(error => dispatch(fetchCollectionFailure(error.message)));
    }
}