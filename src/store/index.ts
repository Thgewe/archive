import {configureStore} from "@reduxjs/toolkit";
import themeReducer from './ThemeSlice';
import authReducer from './AuthSlice';
import entitiesReducer from './entitiesSlice';
import categoryReducer from './categorySlice';
import humansReducer from './humansSlice';
import createSagaMiddleware from 'redux-saga';
import {rootWatcher} from "./saga";

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: {
        themeReducer,
        authReducer,
        entitiesReducer,
        categoryReducer,
        humansReducer,

    },
    middleware: [sagaMiddleware],
})

sagaMiddleware.run(rootWatcher)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch