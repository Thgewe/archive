import React, {useEffect} from 'react';
import cl from './archivePage.module.scss';
import ArchiveList from "../../components/ArchiveList/ArchiveList";
import {Outlet, useLocation} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {HUMANS_ROUTE} from "../../utils/constants";
import {getHumans} from "../../store/humansSlice";



const ArchivePage = () => {

    //TODO - replace ArchivePage with specific pages

    // const location = useLocation()
    const dispatch = useAppDispatch()
    const humans = useAppSelector(state => state.humansReducer)
    const category = useAppSelector(state => state.categoryReducer)

    useEffect(() => {
        // if ((location.pathname.match(/\/.*(?=\/)|\/.*/))![0] === HUMANS_ROUTE) {
        console.log(category)
        // if (location.state.kind === 'human') {
            console.log('dispatch')
            dispatch(getHumans())
        // }
    }, [])
    useEffect(() => {
        console.log('update', humans.loading)
        // console.log(location.state)
    })

    return (
        <div className={cl.archive}>
            <ArchiveList items={humans.allIds}/>
            <div className={cl.main}>
                <Outlet context={humans}/>
            </div>
        </div>
    );
};

export default ArchivePage;