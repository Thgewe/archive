import {IError, IErrorAction} from "../models/error";
import {IHumanEntities} from "../models/entities";
import {createSlice} from "@reduxjs/toolkit";

export interface IHumansState extends IHumanEntities {
    loading: boolean,
    error: IError,
}
interface IHumansAction {
    type: string,
    payload: IHumanEntities,
}

const initialState: IHumansState = {
    byId: {},
    allIds: [],
    loading: false,
    error: {
        code: '',
        message: '',
    }
}

export const humansSlice = createSlice({
    name: 'humans',
    initialState,
    reducers: {
        getHumans(state: IHumansState) {
            return {...state, error: {code: '', message: ''}, loading: true}
        },
        setHumans(state: IHumansState, action: IHumansAction) {
            return {
                ...state,
                ...action.payload,
                loading: false,
                error: {code: '', message: ''}
            }
        },
        clearHumans(state: IHumansState) {
            return initialState
        },
        setHumansError(state: IHumansState, action: IErrorAction) {
            return {...state, error: {...action.payload}, loading: false}
        }

    }
})

export const { getHumans, setHumans, setHumansError, clearHumans } = humansSlice.actions

export default humansSlice.reducer