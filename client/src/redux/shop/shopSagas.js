import { all, call, put, takeLatest } from '@redux-saga/core/effects';
import { firestore,convertCollectionsSnapshotToMap } from '../../firebase/Firebase';
import { fetchCollectionFailure, fetchCollectionSuccess } from './shopAction';
import ShopActionTypes from './shopActionTypes';

function* fetchCollection() {
    try {
        const collectionRef = firestore.collection('collections');
        const collectionSnapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, collectionSnapshot);
        yield put(fetchCollectionSuccess(collectionsMap));
    }catch(error) {
        yield put(fetchCollectionFailure(error));
    }
}

function* onFetchCollectionStart() {
    yield takeLatest(ShopActionTypes.FETCH_COLLECTION_START, fetchCollection)
}

function* shopSagas() {
    yield all([call(onFetchCollectionStart)]);
}

export { shopSagas };