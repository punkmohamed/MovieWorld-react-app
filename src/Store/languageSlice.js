import { createSlice } from "@reduxjs/toolkit";
import ar from './../Language/AR';
import en from './../Language/EN';
import fr from './../Language/FR';


const translation = {
    en,
    ar,
    fr
}
const INITIAL_STATE = {
    language: "en",
    translation: translation['en']
}


const languageSlice = createSlice({
    name: "languageSlice",
    initialState: INITIAL_STATE,
    reducers: {
        setLanguage(state, action) {
            state.language = action.payload
            state.translation = translation[action.payload]
        }
    }
})

export const { setLanguage } = languageSlice.actions

export default languageSlice.reducer