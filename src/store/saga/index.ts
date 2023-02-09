import { all } from 'redux-saga/effects'
import {logInWatcher, logOutWatcher, signUpWatcher} from "./authSaga";
import {getHumansWatcher} from "./entitiesSaga";

export function* rootWatcher() {
    yield all([
        logInWatcher(),
        signUpWatcher(),
        logOutWatcher(),
        getHumansWatcher(),
    ])
}