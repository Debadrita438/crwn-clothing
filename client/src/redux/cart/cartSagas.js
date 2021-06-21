import { takeLatest, call, all, put } from '@redux-saga/core/effects';
import UserActionTypes from '../user/userActionTypes';
import { clearCart } from './cartAction';


function* clearCartOnSignOut() {
    yield put(clearCart());
}

function* onSignOutSuccess() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

function* cartSagas() {
    yield all([call(onSignOutSuccess)]);
}

export { cartSagas };