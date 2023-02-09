import React from 'react';
import cl from './header.module.scss';
import ButtonIcon from "../UI/ButtonIcon/ButtonIcon";
import {ReactComponent as HomeSvg} from '../../images/svg/home.svg'
import {ReactComponent as ThemeLightSvg} from "../../images/svg/sun.svg";
import {ReactComponent as ThemeDarkSvg} from "../../images/svg/moon.svg";
import {ReactComponent as LogOutSvg} from "../../images/svg/logout.svg";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {themeSlice} from "../../store/ThemeSlice";
import {HOME_ROUTE, localStorageTheme, themeDark, themeLight} from "../../utils/constants";
import DropdownNav from "../DropdownNav/DropdownNav";
import {useNavigate} from "react-router-dom";
import {tryLogOut} from "../../store/AuthSlice";

const Header = () => {

    const theme = useAppSelector(state => state.themeReducer)
    const dispatch = useAppDispatch()
    const toggleTheme = themeSlice.actions.toggleTheme

    const navigate = useNavigate()

    const onThemeToggle = () => {
        dispatch(toggleTheme())
        localStorage.getItem(localStorageTheme)
            ? localStorage.setItem(localStorageTheme, theme === themeDark ? themeLight : themeDark)
            : localStorage.setItem(localStorageTheme, themeDark)
    }

    return (
        <div className={cl.header}>
            <div className={cl.left}>
                <ButtonIcon
                    onClick={() => navigate(HOME_ROUTE)}
                    title={'домой'}
                >
                    <HomeSvg />
                </ButtonIcon>
                <ButtonIcon
                    onClick={onThemeToggle}
                    title={theme === themeLight ? 'тёмная тема' : 'светлая тема'}
                >
                    {theme === themeDark ? <ThemeLightSvg /> : <ThemeDarkSvg />}
                </ButtonIcon>
                <ButtonIcon
                    onClick={() => dispatch(tryLogOut())}
                    title={'выйти'}
                >
                    <LogOutSvg />
                </ButtonIcon>
            </div>
            <div className={cl.right}>
                <DropdownNav />
            </div>
        </div>
    );
};

export default Header;