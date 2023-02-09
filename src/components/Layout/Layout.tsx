import React, {FC, PropsWithChildren} from 'react';
import cl from './layout.module.scss';
import Header from "../Header/Header";

const Layout: FC<PropsWithChildren> = ({children}) => {
    return (
        <div className={cl.layout}>
            <div className={cl.header}>
                <Header />
            </div>
            <main className={cl.main}>
                {children}
            </main>
        </div>
    );
};

export default Layout;