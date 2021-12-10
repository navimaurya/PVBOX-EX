import { takeLatest, call, put, all, fork } from "@redux-saga/core/effects";
import axios from 'axios'
import appStarterActionType from "./starter-action-type";
import { appStarterSuccess, appStarterFailure } from "./starter-action";
import { chatListFetchStart, chatFetchStart, addNewMessages } from "../chat/chat-action";


// event handler
export function* appStarterStarting() {
    try {
        yield put(chatListFetchStart())
        // yield put(chatFetchStart({ payload: { friend: '617276487cfcea76a08075e5' } }))

        yield put(appStarterSuccess())
    } catch (error) {
        yield put(appStarterFailure())
    }

}

// event catcher
export function* onAppStarterStart() {
    yield takeLatest(appStarterActionType.APP_STARTER_START, appStarterStarting)
}


export function* appStarterSagas() {
    yield all([
        call(onAppStarterStart),
    ])
}