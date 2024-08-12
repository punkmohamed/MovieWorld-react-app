
import { createStore } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import combineReducers from './compineReducers';



const store = createStore(combineReducers, composeWithDevTools())

export default store