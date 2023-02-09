import {IEntity, IHuman} from "./firebase";

export interface IHumanEntities {
    byId: {
        [index: string]: IHuman,
    },
    allIds: IEntity[]
}