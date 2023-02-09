import {call, put, takeEvery} from "redux-saga/effects";
import {logIn, logOut, setAuthError, tryLogIn, trySignUp, tryLogOut} from '../AuthSlice'
import {createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../firebase";
import {IAuthAction} from "../../models/auth";
import {clearEntities} from "../entitiesSlice";
import {clearHumans} from "../humansSlice";

function* logInWorker(action: IAuthAction):any {
    try {
        yield call(() =>
            signInWithEmailAndPassword(auth, action.payload.email, action.payload.password)
        )
        yield put(logIn())
    } catch (e: any) {
        yield  put(setAuthError({code: e.code, message: e.message}))
    }
}

function* signUpWorker(action: IAuthAction) {
    try {
        yield call(() =>
            createUserWithEmailAndPassword(auth, action.payload.email, action.payload.password)
        )
        yield put(logIn())
    } catch (e: any) {
        yield put(setAuthError({code: e.code, message: e.message}))
    }
}

function* logOutWorker() {
    try {
        yield signOut(auth)
        yield put(logOut())
        yield put(clearHumans())
    } catch(e: any) {
        alert('Что-то пошло не так: ' + e.message)
    }
}

export function* logInWatcher() {
    yield takeEvery(tryLogIn.type, logInWorker)
}
export function* signUpWatcher() {
    yield takeEvery(trySignUp.type, signUpWorker)
}
export function* logOutWatcher() {
    yield takeEvery(tryLogOut.type, logOutWorker)
}