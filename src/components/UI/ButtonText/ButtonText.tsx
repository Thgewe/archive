import React, {FC, memo} from 'react';
import cl from './buttonText.module.scss';

interface IButtonTextProps {
    text: string,
    type?: 'default' | 'text',
    theme?: 'dark' | 'light',
    submit?: boolean,
    onClick?: () => void,
}

const ButtonText: FC<IButtonTextProps> = memo(({
                                              type= 'default',
                                              theme= 'dark',
                                              text,
                                              submit, onClick,
}) => {
    return (
        <button onClick={onClick} type={submit ? 'submit' : 'button'} className={cl.button + ' ' +
            (type === 'default'
                ? theme === 'dark'
                    ? ''
                    : cl.light
                : theme === 'dark'
                    ? cl.text
                    : cl.text + ' ' + cl.light)
        }>
            {text}
        </button>
    );
});

export default ButtonText;