import { combineReducers } from "redux";
import counterReducer from "./../duck/reducer";

const rootReducer = combineReducers({ counterReducer });

export default rootReducer;
