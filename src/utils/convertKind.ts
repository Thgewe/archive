import {unknown} from "./constants";

export const convertKind = (kind: string) => {
    switch (kind) {
        case 'human':
            return 'человек'
        default:
            return unknown
    }
}