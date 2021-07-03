import {rootReducer} from "./rootReducer";
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import logger from 'redux-logger';
import thunk from 'redux-thunk';

let middleWares = [logger , thunk];
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleWares)));
export {store};
