import { createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
import { composeWithDevTools } from "redux-devtools-extension"
import {persistStore } from 'redux-persist'

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [];

if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger);
}

export const store = createStore(
    rootReducer,composeWithDevTools(applyMiddleware(...middlewares))
    );

export const persistor = persistStore(store);

export default {store,persistor};