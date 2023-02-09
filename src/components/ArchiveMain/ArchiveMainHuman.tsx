import React from 'react';
import {Link, useOutletContext, useParams} from "react-router-dom";
import {IHumansState} from "../../store/humansSlice";
import cl from "./archiveMain.module.scss";
import {useAppSelector} from "../../hooks/redux";
import Archive from "../../api/firebase";
import {convertStatus} from "../../utils/convertStatus";
import {unknown} from "../../utils/constants";
import {convertKind} from "../../utils/convertKind";
import TextBlock from "../TextBlock/TextBlock";

const ArchiveMainHuman = () => {

    const humans = useAppSelector(state => state.humansReducer)
    const { id } = useParams()

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
                    <li className={cl.stat}>
                        <span>Статус:</span>
                        {convertStatus(item.status)}
                    </li>
                    <li className={cl.stat}>
                        <span>Возраст:</span>
                        {item.age ? item.age : unknown}
                    </li>
                    <li className={cl.stat}>
                        <span>Вид:</span>
                        {convertKind(item.kind)}
                    </li>
                    <li className={cl.stat}>
                        <span>Раса:</span>
                        {item.race ? item.race : unknown}
                    </li>
                    <li className={cl.stat}>
                        <span>Семья:</span>
                        {item.family ? item.family : unknown}
                    </li>
                    <li className={cl.stat}>
                        <span>Отец:</span>
                        {item.father ? getLinkOrString(item.father_id, item.father) : unknown}
                    </li>
                    <li className={cl.stat}>
                        <span>Мать:</span>
                        {item.mother ? getLinkOrString(item.mother_id, item.mother) : unknown}
                    </li>
                    <li className={cl.stat}>
                        <span>Дата рождения:</span>
                        {item.date_of_birth ? item.date_of_birth : unknown}
                    </li>
                    {item.date_of_death &&
                        <li className={cl.stat}>
                            <span>Дата смерти:</span>
                            {item.date_of_death}
                        </li>
                    }
                    <li className={cl.stat}>
                        <span>Место рождения:</span>
                        {item.place_of_birth ? item.place_of_birth : unknown}
                    </li>
                    {item.house &&
                        <li className={cl.stat}>
                            <span>Место жительства:</span>
                            {item.house}
                        </li>
                    }
                    {item.brothers.length > 0 && <li className={cl.stat}>
                        <span>Братья:</span> {
                        item.brothers.map((bro) =>
                            getLinkOrString(bro.id, bro.name, true))
                    }</li>}
                    {item.sisters.length > 0 && <li className={cl.stat}>
                        <span>Сёстры:</span> {
                        item.sisters.map((sis) =>
                            getLinkOrString(sis.id, sis.name, true))
                    }</li>}
                    {item.children.length > 0 && <li className={cl.stat}>
                        <span>Дети:</span> {
                        item.children.map((child) =>
                            getLinkOrString(child.id, child.name, true))
                    }</li>}
                </ul>
            </div>
            {item.biography && <TextBlock name={'Биография'} text={item.biography} />}
            {item.description && <TextBlock name={'Описание'} text={item.description} />}
            {/*<button onClick={() => {*/}
            {/*    archive.setHuman()*/}
            {/*}}>Add Human</button>*/}
        </section>
    );
};

export default ArchiveMainHuman;