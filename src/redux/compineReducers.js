import { combineReducers } from "redux";
import WishListReducer from "./Reducer";
import apiReducer from "./Reducers/ApiReducers";


export default combineReducers({
    WishListReducer,
    apiReducer,
})