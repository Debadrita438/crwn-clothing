import { takeLatest, call, all, put, select } from '@redux-saga/core/effects';
import { getUserCartRef } from '../../firebase/Firebase';
import UserActionTypes from '../user/userActionTypes';
import { selectCurrentUser } from '../user/userSelector'; 
import { clearCart, setCartFromFirebase } from './cartAction';
import CartActionTypes from './cartActionTypes';
import { selectCartItems } from './cartSelector';


function* clearCartOnSignOut() {
    yield put(clearCart());
}

function* updateCartInFirebase() {
    const currentUser = yield select(selectCurrentUser);
    if(currentUser) {
        try {
            const cartRef = yield getUserCartRef(currentUser.id);
            const cartItems = yield select(selectCartItems);
            yield cartRef.update({ cartItems });
        } catch(error) {
            console.log(error.message);
        }
    }
}

function* checkCartFromFirebase({ payload: user }) {
    const cartRef = yield getUserCartRef(user.id);
    const cartSnapshot = yield cartRef.get();
    yield put(setCartFromFirebase(cartSnapshot.data().cartItems));
}

function* onSignOutSuccess() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

 
function* onUserSignIn() {
    yield takeLatest(UserActionTypes.SIGN_IN_SUCCESS, checkCartFromFirebase);
}

function* onCartChange() {
    yield takeLatest(
        [
            CartActionTypes.ADD_ITEM,
            CartActionTypes.REMOVE_ITEM, 
            CartActionTypes.CLEAR_ITEM_FROM_CART
        ],
    updateCartInFirebase);
}

function* cartSagas() {
    yield all([call(onSignOutSuccess), call(onUserSignIn), call(onCartChange)]);
}

export { cartSagas };