import {HOME_ROUTE, HUMANS_ROUTE} from "./constants";

export const linkByKind = (kind: string) => {
    switch (kind) {
        case 'human':
            return HUMANS_ROUTE
        default:
            return HOME_ROUTE
    }
}