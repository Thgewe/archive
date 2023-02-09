import React, {FC, useEffect, useState} from 'react';
import cl from './archiveListItem.module.scss';
import {Link, useLocation} from "react-router-dom";
import uid from 'uniqid';

interface IArchiveListItemProps {
    name: string,
    id: string,
    kind: string,
}

const ArchiveListItem: FC<IArchiveListItemProps> = ({name, id, kind}) => {

    const location = useLocation()
    const [isActive, setIsActive] = useState<boolean>(false)

    useEffect(() => {
        console.log('list item')

        if ((location.pathname.match(/\/.*(?=\/)|\/.*/) + '/' + id) === location.pathname) {
            setIsActive(true)
        } else if (isActive) {
            setIsActive(false)
        }
    }, [location.pathname])

    return (
        <Link
            className={isActive ? cl.item + ' ' + cl.active : cl.item}
            // to={{pathname: linkByKind(kind) + '/' + id, }}
            to={id}
            key={uid()}
        >
            {name}
        </Link>
    );
};

export default ArchiveListItem;