import {createSlice} from "@reduxjs/toolkit";
import {IAuth, IAuthAction, IAuthErrorAction} from "../models/auth";

const initialState: IAuth = {
    loading: false,
    error: {
        code: '',
        message: '',
    },
    signedIn: localStorage.getItem('user')
        ? (localStorage.getItem('user') === 'true')
        : false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        tryLogIn(state: IAuth, action: IAuthAction) {return {...state, loading: true}},
        logIn(state: IAuth) {
            localStorage.setItem('user', 'true')
            return {...state, signedIn: true, error: {code: '', message: ''}, loading: false}
        },
        trySignUp(state: IAuth, action: IAuthAction) {return {...state, loading: true}},
        tryLogOut() {},
        logOut(state: IAuth) {
            localStorage.setItem('user', 'false')
            return {...state, signedIn: false, error: {code: '', message: ''}}
        },
        setAuthError(state: IAuth, action: IAuthErrorAction) {
            return {...state, signedIn: false, error: {...action.payload}, loading: false}
        }
    }
})

export const { tryLogIn, trySignUp, logOut, logIn, setAuthError, tryLogOut} = authSlice.actions

export default authSlice.reducer