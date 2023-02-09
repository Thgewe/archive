import {
    GOD_ROUTE_ID,
    GODS_ROUTE,
    HOME_ROUTE,
    HUMAN_ROUTE_ID,
    HUMANS_ROUTE, LOGIN_ROUTE,
    MONSTER_ROUTE_ID,
    MONSTERS_ROUTE
} from "./utils/constants";
import HomePage from "./pages/HomePage/HomePage";
import ArchivePage from "./pages/ArchivePage/ArchivePage";
import ArchiveMain from "./components/ArchiveMain/ArchiveMain";
import ArchivePageHumans from "./pages/ArchivePageHumans/ArchivePageHumans";
import {MemoExoticComponent} from "react";
import ArchiveMainHuman from "./components/ArchiveMain/ArchiveMainHuman";


interface IRoute {
    path: string,
    name: string,
    component: MemoExoticComponent<() => JSX.Element> | (() => JSX.Element),
    nested?: {
        path: ':id',
        component: (() => JSX.Element) | MemoExoticComponent<() => JSX.Element>,
    }
}

const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        name: 'login',
        component: HomePage,
    },
]

const routes: IRoute[] = [
    {
        path: HOME_ROUTE,
        name: 'home',
        component: HomePage,
    },
    {
        path: HUMANS_ROUTE,
        name: 'humans',
        component: ArchivePageHumans,
        nested: {
            path: ':id',
            component: ArchiveMainHuman
        }
    },
    {
        path: GODS_ROUTE,
        name: 'gods',
        component: ArchivePage,
        nested: {
            path: ':id',
            component: ArchiveMain
        }
    },
    {
        path: MONSTERS_ROUTE,
        name: 'monsters',
        component: ArchivePage,
        nested: {
            path: ':id',
            component: ArchiveMain
        }
    },
]

export default routes