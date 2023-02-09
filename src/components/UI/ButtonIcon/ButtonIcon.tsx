import React, {FC, PropsWithChildren} from 'react';
import cl from './buttonIcon.module.scss';

interface IButtonIconProps extends PropsWithChildren {
    onClick: Function,
    title: string,
}

const ButtonIcon: FC<IButtonIconProps> = ({onClick, title, children}) => {

    return (
        <button
            className={cl.button}
            title={title}
            onClick={() => onClick()}>
            {children}
        </button>
    );
};

export default ButtonIcon;