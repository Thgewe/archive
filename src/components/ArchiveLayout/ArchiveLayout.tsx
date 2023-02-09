import React, {FC} from 'react';
import ArchiveList from "../ArchiveList/ArchiveList";
import cl from './archiveLayout.module.scss'
import {Outlet, useOutlet} from "react-router-dom";
import {IHumanEntities} from "../../models/entities";
import ArchiveMainPlaceholder from "../ArchiveMain/ArchiveMainPlaceholder";

interface IArchiveLayoutProps {
    entities: IHumanEntities,
    placeholderName: string,
    placeholderText: string,
}

const ArchiveLayout: FC<IArchiveLayoutProps> = ({
                                                    entities,
                                                    placeholderName,
                                                    placeholderText
}) => {

    const outlet = useOutlet()

    return (
        <div className={cl.archive}>
            <ArchiveList items={entities.allIds}/>
            <div className={cl.main}>
                {outlet
                    ? <Outlet context={entities}/>
                    : <ArchiveMainPlaceholder name={placeholderName} text={placeholderText}/>
                }
            </div>
        </div>
    );
};

export default ArchiveLayout;