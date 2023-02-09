import React, {FC} from 'react';
import cl from "./textBlock.module.scss";

interface ITextBlockProps {
    name: string,
    text: string,
}

const TextBlock: FC<ITextBlockProps> = ({text, name}) => {
    return (
        <div className={cl.block}>
            <h2 className={cl.headline}>{name}</h2>
            <p className={cl.text}>{text}</p>
        </div>
    );
};

export default TextBlock;