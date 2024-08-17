import { configureStore } from "@reduxjs/toolkit";
import languageSlice from "./languageSlice";
import wishlistSlice from "./wishlistSlice";
import fetchDataSlice from './apiSlice';


const store = configureStore({
    reducer: {
        languageSlice,
        wishlistSlice,
        fetchDataSlice
    }
})


export default store