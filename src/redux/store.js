import { createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
import { composeWithDevTools } from "redux-devtools-extension"

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [logger];

const store = createStore(
    rootReducer,composeWithDevTools(applyMiddleware(...middlewares))
    );

export default store;