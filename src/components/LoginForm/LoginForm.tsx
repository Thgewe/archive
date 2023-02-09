import React, {useCallback, useState} from 'react';
import cl from './loginForm.module.scss'
import InputField from "../UI/InputField/InputField";
import ButtonText from "../UI/ButtonText/ButtonText";
import Loader from "../UI/Loader/Loader";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {setAuthError, tryLogIn, trySignUp} from "../../store/AuthSlice";

const LoginForm = () => {

    const [isSignIn, setIsSignIn] = useState<boolean>(true)

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const {error, loading} = useAppSelector(state => state.authReducer)
    const dispatch = useAppDispatch()

    const toggleIsSignIn = useCallback(() => {
        setIsSignIn(prevState => !prevState)
    }, [isSignIn])

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!email || !password)
            return dispatch(setAuthError({code: '', message: 'Введите почту и пароль'}))

        if (isSignIn) {
            dispatch(tryLogIn({email, password}))
        } else {
            dispatch(trySignUp({email, password}))
        }
    }

    return (
        <form className={cl.form} onSubmit={onSubmit}>
            <h1>{isSignIn ? 'Вход' : 'Регистрация'}</h1>
            {error.message ? <div className={cl.error}>{error.message}</div> : null}
            <InputField
                placeholder={'почта'}
                value={email}
                setValue={setEmail}
            />
            <InputField
                placeholder={'пароль'}
                type={'password'}
                value={password}
                setValue={setPassword}
            />
            {loading
                ? <div className={cl.loading}>
                    <Loader />
                </div>
                : <div className={cl.buttons}>
                    {isSignIn
                        ? <>
                            <ButtonText text={'Войти'} submit={true}/>
                            <ButtonText text={'Регистрация'} type={'text'} onClick={toggleIsSignIn}/>
                        </>
                        : <>
                            <ButtonText text={'Регистрация'} submit={true} />
                            <ButtonText text={'Войти'} type={'text'} onClick={toggleIsSignIn}/>
                        </>
                    }
                </div>
            }
        </form>
    );
};

export default LoginForm;