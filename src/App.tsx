import React, {useEffect, useState} from 'react';
import './App.scss';
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import AppRouter from "./components/AppRouter";
import {LOGIN_ROUTE} from "./utils/constants";
import LoginPage from "./pages/LoginPage/LoginPage";
import {auth} from './firebase';
import {authSlice} from "./store/AuthSlice";
import Loader from "./components/UI/Loader/Loader";

/* TODO:
*   - 404 component
*   - error component
*   - identify the entities
*   - the ability to add new objects
*   - ability to modify existing entities
*   - text handler
* */

function App() {

    const theme = useAppSelector(state => state.themeReducer)

    const {signedIn} = useAppSelector(state => state.authReducer)
    const [user, setUser] = useState<any>(auth.currentUser)

    const dispatch = useAppDispatch()
    const {logIn, logOut} = authSlice.actions

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (signedIn && user) {
                setUser(true)
            } else if (!user) {
                dispatch(logOut())
            } else {
                dispatch(logIn())
            }
        })
    }, [])

    return (
        <BrowserRouter>
            <div className="App" id={'root-app'} data-theme={theme}>
                {!signedIn
                    ? <Routes>
                        <Route path={LOGIN_ROUTE} element={<LoginPage />}/>
                        <Route path={'*'} element={<Navigate to={LOGIN_ROUTE} />}/>
                    </Routes>
                    : user
                        ? <Layout>
                            <AppRouter />
                        </Layout>
                        : <div className="app-loading">
                            <Loader />
                        </div>
                }
            </div>
        </BrowserRouter>
    );
}

export default App;