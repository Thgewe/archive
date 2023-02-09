import React, {FC, useState} from 'react';
import cl from './archiveList.module.scss';
import ArchiveListItem from "../ArchiveListItem/ArchiveListItem";
import {IEntity} from "../../models/firebase";

interface IArchiveListProps {
    items: IEntity[]
}

const ArchiveList: FC<IArchiveListProps> = ({items}) => {

    const [value, setValue] = useState<string>('')

    return (
        <div className={cl.list}>
            <div className={cl.search}>
                <input
                    className={cl.input}
                    onChange={(e) => setValue(e.currentTarget.value)}
                    value={value}
                />
            </div>
            {items
                .filter((item) =>
                    item.name.toLowerCase().includes(value.toLowerCase())
                ).map((item) =>
                    <ArchiveListItem
                        name={item.name}
                        id={item.id}
                        key={item.id}
                        kind={item.kind}
                    />
            )}
        </div>
    );
};

export default ArchiveList;