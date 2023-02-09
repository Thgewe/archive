import {createSlice} from "@reduxjs/toolkit";
import {IHumanEntities} from "../models/entities";
import {IError, IErrorAction} from "../models/error";

interface IAllEntities {
    loading: boolean,
    error: IError,
    humans: IHumanEntities,
}
interface IHumanAction {
    type: string,
    payload: IHumanEntities,
}

const initialState: IAllEntities = {
    loading: false,
    error: {
        code: '',
        message: '',
    },
    humans: {
        byId: {},
        allIds: [],
    }
}

export const entitiesSlice = createSlice({
    name: 'entities',
    initialState,
    reducers: {
        getHumans(state: IAllEntities) {
            return {...state, error: {code: '', message: ''}, loading: true}
        },
        setHumans(state: IAllEntities, action: IHumanAction) {
            return {
                ...state,
                humans: {...action.payload},
                loading: false,
                error: {code: '', message: ''}
            }
        },
        clearEntities(state: IAllEntities) {
            return initialState
        },
        setEntitiesError(state: IAllEntities, action: IErrorAction) {
            return {...state, error: {...action.payload}, loading: false}
        }

    }
})

export const { getHumans, setHumans, setEntitiesError, clearEntities } = entitiesSlice.actions

export default entitiesSlice.reducer