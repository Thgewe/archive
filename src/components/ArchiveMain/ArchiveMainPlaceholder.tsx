import React, {FC} from 'react';
import cl from './archiveMain.module.scss';

interface IPlaceholderProps {
    name: string,
    text: string,
}

const ArchiveMainPlaceholder: FC<IPlaceholderProps> = ({name, text}) => {
    return (
        <div className={cl.placeholder}>
            <h1>{name}</h1>
            <p>{text}</p>
        </div>
    );
};

export default ArchiveMainPlaceholder;