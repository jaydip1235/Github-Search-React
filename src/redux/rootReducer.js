import {combineReducers} from "redux";
import * as githubSearchReducer from './githubSearch/githubSearch.reducer';

const rootReducer = combineReducers({
    [githubSearchReducer.githubSearchFeatureKey] : githubSearchReducer.reducer
});
export {rootReducer};
