import React from 'react';
import cl from './loginPage.module.scss';
import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPage = () => {
    return (
        <div className={cl.login}>
            <LoginForm />
        </div>
    );
};

export default LoginPage;