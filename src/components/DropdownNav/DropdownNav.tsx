import React, {useEffect, useRef, useState} from 'react';
import cl from './dropdownNav.module.scss';
import {ReactComponent as DropSvg} from "../../images/svg/dropdown.svg";
import {Link, NavLink, useLocation} from "react-router-dom";
import {GODS_ROUTE, HOME_ROUTE, HUMANS_ROUTE, MONSTERS_ROUTE} from "../../utils/constants";

const DropdownNav = () => {

    const dropRoutes = [
        {
            name: 'ГЛАВНАЯ',
            path: HOME_ROUTE,
            kind: 'main'
        },
        {
            name: 'ЛЮДИ',
            path: HUMANS_ROUTE,
            kind: 'human'
        },
        {
            name: 'МОНСТРЫ',
            path: MONSTERS_ROUTE,
            kind: 'monster'
        },
        {
            name: 'БОГИ',
            path: GODS_ROUTE,
            kind: 'gods'
        },
    ]

    const [active, setActive] = useState<string>('')
    const tongue = useRef<HTMLDivElement>(null)
    const drop = useRef<HTMLDivElement>(null)
    const location = useLocation()

    useEffect(() => {
        setActive(() => dropRoutes.find(
            (value) => location.pathname.includes(value.path)
        ) ? dropRoutes.find(
            (value) => location.pathname.includes(value.path)
        )!.name : 'ГЛАВНАЯ')
        return () => {
            window.removeEventListener('click', onWindowClick)
        }
    }, [location.pathname])

    const onWindowClick = (e: any) => {
        if (!(e.target as HTMLElement).closest('.' + cl.drop)) {
            window.removeEventListener('click', onWindowClick)
            drop.current
                ? drop.current.classList.remove(cl.active)
                : console.log('no drop')
        }
    }

    const toggleDropdown = (e: React.MouseEvent<HTMLDivElement>) => {
        if ((e.target as HTMLDivElement).closest('.' + cl.item + '.' + cl.current)) {
            e.currentTarget.classList.toggle(cl.active)
            if (e.currentTarget.classList.contains(cl.active)) {
                window.addEventListener('click', onWindowClick)
            }
        } else if ((e.target as HTMLDivElement).closest('.' + cl.item)) {
            e.currentTarget.classList.remove(cl.active)
        }
    }

    return (
        <div className={cl.drop} onClick={toggleDropdown} ref={drop}>
            <div className={cl.item + ' ' + cl.current} >
                <DropSvg />
                <div className={cl.text}>
                    {active}
                </div>
            </div>
            <div className={cl.tongue} ref={tongue}>
                {dropRoutes.map((item) =>
                    <NavLink
                        key={item.name}
                        className={({isActive}) =>
                            isActive ? cl.item + ' ' + cl.inactive : cl.item}
                        to={item.path}
                        state={{kind: item.kind}}
                    >
                        <div className={cl.text}>
                            {item.name}
                        </div>
                    </NavLink>
                )}
            </div>
        </div>
    );
};

export default DropdownNav;