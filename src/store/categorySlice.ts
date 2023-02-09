import {createSlice} from "@reduxjs/toolkit";
import {Categories, ECategory, TCategory} from "../models/category";

interface ICategoryAction {
    type: string,
    payload: TCategory,
}

const initialState: TCategory =
    Categories.includes(window.location.pathname.match(/(?<=\/)[^/]*/)![0] as TCategory)
        ? window.location.pathname.match(/(?<=\/)[^/]*/)![0] as TCategory
        : ECategory.home

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        changeCategory(state, action: ICategoryAction) {
            return action.payload
        }
    }
})

export const { changeCategory } = categorySlice.actions

export default categorySlice.reducer