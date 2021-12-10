import { takeLatest, put, all, call } from 'redux-saga/effects';
import userActionType from './user-action-type';
import axios from 'axios'
import { auth, googleProvider, createUserProfileDoc, getCurrentUser } from '../../firebase/firebase-utils';
import {
    googleSignInFailuer, googleSignInSuccess,
    emailSignInSuccess, emailSignInFailuer,
    signInSuccess, signInFailure,
    signOutSuccess, signOutFailure,
    userIdSignInSuccess, userIdSignInStart,
    userIdSignInFailuer,
    getLoggedInUserSuccess,
} from './user-action';

// UTILITY FUNCTION
export function* getSnapshotFromUserAuth(userAuth, additionalData) {
    try {
        const userRef = yield call(
            createUserProfileDoc,
            userAuth,
            additionalData
        );
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
    } catch (error) {
        yield put(emailSignInFailuer(error));
    }
}

const createUserProfileWithGoogle = async (user) => {
    const { displayName: name, email, emailVerified, phoneNumber: phone, photoURL: image } = user;
    try {
        const data = await axios.post('api/signup/google', {
            name, email, emailVerified, phone, image,
        })
        if (data.data.status === 'success') {
            console.log(data.data);
        }

    } catch (error) {
        console.log(error);
    }
}

// 1
export function* signInWithGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider);
        const userRef = yield call(createUserProfileWithGoogle, user);
        const shnapShot = yield userRef.get();
        yield put(googleSignInSuccess({ id: shnapShot.id, ...shnapShot.data() }))
    } catch (error) {
        yield put(googleSignInFailuer(error))
    }
}
export function* onGoogleSignInStart() {
    yield takeLatest(userActionType.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

// 2
export function* loginWithEmail(userId, password) {
    try {
        const { data } = yield axios.post('api/login', { userId, password });
        if (data.status === 'success') {
            yield put(emailSignInSuccess(data.user._id, ...data.user));
        }

    } catch (error) {

    }
}
// 2.3
export function* getLoggedInUser() {
    try {
        const { data } = yield axios.get('api/getLoggedInUser');
        if (data.status === 'success') {
            yield put(getLoggedInUserSuccess(data.user));
        }
    } catch (error) {

    }
}
export function* signInWithEmail({ payload: { email, password } }) {
    try {
        const data = yield loginWithEmail(email, password);
        console.log(data);
    } catch (error) {
        yield put(emailSignInFailuer(error))
    }
}

export function* onEmailSignInStart() {
    yield takeLatest(userActionType.EMAIL_SIGN_IN_START, signInWithEmail)
}
//2.5
export function* signInWithUserId({ payload: { userId, password } }) {
    try {
        const { data } = yield axios.post('api/login', { userId, password });
        if (data.status === 'success') {

            yield put(userIdSignInSuccess({ id: data.user._id, ...data.user }));
        }
    } catch (error) {
        yield put(userIdSignInFailuer(error))
    }
}

export function* onUserIdlSignInStart() {
    yield takeLatest(userActionType.USER_ID_SIGN_IN_START, signInWithUserId)
}

// 3
export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        if (!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth);
    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function* onCheckUserSession() {
    yield takeLatest(userActionType.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onGetLoggedInUserStart() {
    yield takeLatest(userActionType.GET_LOGGEDIN_USER_START, getLoggedInUser)
}

// 4
export function* signOut() {
    try {
        yield auth.signOut();
        yield put(signOutSuccess())
    } catch (error) {
        return put(signOutFailure())
    }
}
export function* onSignOutStart() {
    yield takeLatest(userActionType.SIGN_OUT_START, signOut)
}

//  EXPORT
export function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(isUserAuthenticated),
        call(onUserIdlSignInStart),
        call(onSignOutStart),
        call(onGetLoggedInUserStart)
    ]);
}