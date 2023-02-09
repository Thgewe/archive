import {createSlice} from "@reduxjs/toolkit";
import {localStorageTheme, themeDark, themeLight} from "../utils/constants";

const initialState = localStorage.getItem(localStorageTheme)
    ? localStorage.getItem(localStorageTheme)!
    : window.matchMedia('(prefers-color-scheme: light)').matches
        ? themeLight
        : themeDark

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme(state) {
            return state === themeLight
                ? state = themeDark
                : state = themeLight
        }
    }
})

export default themeSlice.reducer