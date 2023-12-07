import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

/** Reducer */
import themes from "./slice/themeSlice";
import backgrounds from "./slice/backgroundSlice";
import animations from "./slice/animationSlice";

/** Root Saga */
import rootSaga from '../saga/rootSaga';

const reducers = combineReducers({
    themes,
    backgrounds,
    animations
})

/** Middleware */
let sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false, serializableCheck: false }), sagaMiddleware];

const store = configureStore({
    reducer: reducers,
    middleware,
});

sagaMiddleware.run(rootSaga);

export default store;
