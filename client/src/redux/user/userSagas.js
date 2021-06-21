import { all, call, takeLatest, put } from '@redux-saga/core/effects';
import { auth, createUserProfileDocument, getCurrentUser, googleProvider } from '../../firebase/Firebase';
import { signInFailure, signInSuccess, signOutFailure, signOutSuccess, signUpFailure, signUpSuccess } from './userAction';
import UserActionTypes from './userActionTypes';

function* getUserSnapshot(userAuth, additionalData) {
    try{
        const userRef = yield call(createUserProfileDocument, userAuth, additionalData);
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
    } catch(error) {
        yield put(signInFailure(error));
    }
}

function* googleSignIn() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider);
        yield getUserSnapshot(user);
    } catch(error) {
        yield put(signInFailure(error));
    }
}

function* emailSignIn({ payload: { email, password } }) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getUserSnapshot(user);
    } catch(error) {
        yield put(signInFailure(error));
    }
}

function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        if(!userAuth) return;
        yield getUserSnapshot(userAuth);
    } catch(error) {
        yield put(signInFailure(error));
    }
}

function* signOut() {
    try {
        auth.signOut();
        yield put(signOutSuccess());
    } catch(error) {
        yield put(signOutFailure(error));
    }
}

function* signUp({ payload: { email, password, displayName } }) {
    try  {
        const { user } = yield auth.createUserWithEmailAndPassword(email, password);
        yield put(signUpSuccess({ user, additionalData: { displayName } }));
    } catch(error) {
        yield put(signUpFailure(error));
    }
}

function* signInAfterSignUp({ payload: { user, additionalData } }) {
    yield getUserSnapshot(user, additionalData);
}

function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, googleSignIn);
}

function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, emailSignIn);
}

function* onCheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

function* onSignOutStart() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

function* onSignUpStart() {
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

function* onSignUpSuccess() {
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
}

function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOutStart),
        call(onSignUpStart),
        call(onSignUpSuccess)
    ]);
}

export { userSagas };