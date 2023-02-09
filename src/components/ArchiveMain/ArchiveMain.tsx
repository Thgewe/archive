import React from 'react';
import cl from './archiveMain.module.scss';
import {Link, useOutletContext, useParams} from "react-router-dom";
import {IHumansState} from "../../store/humansSlice";
import Archive from "../../api/firebase";
import {convertStatus} from "../../utils/convertStatus";
import {unknown} from "../../utils/constants";
import {convertKind} from "../../utils/convertKind";
import {useAppSelector} from "../../hooks/redux";

// TODO - replace ArchiveMain with specific

const ArchiveMain = () => {

    // const outletContext = useOutletContext<IHumansState>()
    const humans = useAppSelector(state => state.humansReducer)
    const { id } = useParams()
    console.log('main outlet')

    const archive = Archive

    if (!humans.byId[id!]) return <div>404</div>

    const item = humans.byId[id!]

    const getLinkOrString = (id: string | null, name: string, isSpan: boolean = false) => {
        return id
            ? <Link to={'../' + id} className={cl.link} title={name}>
                {name}
            </Link>
            : isSpan
                ? <span className={cl.simple}>{name}</span>
                : name
    }

    return (
        <section className={cl.main}>
            <div className={cl.mainInfo}>
                <h1 className={cl.name} title={item.name}>{item.name}</h1>
                <ul className={cl.stats}>
                    <li>Статус: {convertStatus(item.status)}</li>
                    <li>Возраст: {item.age ? item.age : unknown}</li>
                    <li>Тип: {convertKind(item.kind)}</li>
                    <li>Раса: {item.race ? item.race : unknown}</li>
                    <li>Семья: {item.family ? item.family : unknown}</li>
                    <li>Отец: {item.father ? getLinkOrString(item.father_id, item.father) : unknown}</li>
                    <li>Мать: {item.mother ? getLinkOrString(item.mother_id, item.mother) : unknown}</li>
                    <li>Дата рождения: {item.date_of_birth ? item.date_of_birth : unknown}</li>
                    {item.date_of_death && <li>Дата смерти: {item.date_of_death}</li>}
                    <li>Место рождения: {item.place_of_birth ? item.place_of_birth : unknown}</li>
                    {item.house && <li>Место жительства: {item.house}</li>}
                    {item.brothers.length > 0 && <li>Братья: {
                        item.brothers.map((bro) =>
                            getLinkOrString(bro.id, bro.name, true))
                    }</li>}
                    {item.sisters.length > 0 && <li>Сёстры: {
                        item.sisters.map((sis) =>
                            getLinkOrString(sis.id, sis.name, true))
                    }</li>}
                    {item.children.length > 0 && <li>Дети: {
                        item.children.map((child) =>
                            getLinkOrString(child.id, child.name, true))
                    }</li>}
                </ul>
            </div>
            <div className={cl.biography}>
                <h2 className={cl.paragraph}>Биография</h2>
                <p className={cl.text}>{item.biography}</p>
            </div>
            {/*<button onClick={() => {*/}
            {/*    archive.setHuman()*/}
            {/*}}>Add Human</button>*/}
        </section>
    );
};

export default ArchiveMain;