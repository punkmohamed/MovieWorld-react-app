import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";



const INITIAL_STATE = {
    list: []
}
const getMovie = createAsyncThunk('fetchDataSlice/getMovie', async ({ search = '', count = 1, lang }) => {
    const api = search
        ? `https://api.themoviedb.org/3/search/movie?api_key=b932594aaa08e98c262cc502b4484e3d&query=${search}&language=${lang}&page=${count}`
        : `https://api.themoviedb.org/3/movie/popular?api_key=b932594aaa08e98c262cc502b4484e3d&language=${lang}&page=${count}`;
    try {
        const res = await axios.get(api);
        console.log(res.data.results)
        return res.data.results

    } catch (err) {
        return console.log(err);
    }
})

const fetchDataSlice = createSlice({
    name: 'fetchDataSlice',
    initialState: INITIAL_STATE,

    extraReducers: (builder) => {
        builder.addCase(getMovie.fulfilled, (state, action) => {
            state.list = action.payload
        })
    }
})

export {
    getMovie
}

export default fetchDataSlice.reducer