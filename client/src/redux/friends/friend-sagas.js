import { takeLatest, call, put, all } from "@redux-saga/core/effects";
import axios from "axios";

import friendActionType from "./friend-action-type";
import {
    addNewFriendSuccess, addNewFriendFailure,
    getFriendListSuccess, getFriendListFailure
} from "./friend-action";

// 
function* addFriendStart({ payload: { username, message } }) {
    try {
        yield console.log(username);
        const { data } = yield axios.post('/api/addcontact', {
            userId: username,
            message: message
        });
        yield console.log(data);
        if (data.status == 'success') {
            yield put(addNewFriendSuccess(data.data))
        }

    } catch (e) {
        yield put(getFriendListFailure(e))
    }
}
function* getFriendListStart() {
    try {
        const { data } = yield axios.get('/api/getfriendslist');
        if (data.status === 'success') {
            yield put(getFriendListSuccess(data.data))
        }
    } catch (e) {
        yield put(getFriendListFailure(e))
    }
}

// 
export function* onGetFriendStart() {
    yield takeLatest(friendActionType.GET_FRIEND_LIST_START, getFriendListStart)
}
// 
export function* onAddFriendStart() {
    yield takeLatest(friendActionType.ADD_NEW_FRIEND_START, addFriendStart)
}

export function* friendSagas() {
    yield all([
        call(onAddFriendStart),
        call(onGetFriendStart)
    ])
}
