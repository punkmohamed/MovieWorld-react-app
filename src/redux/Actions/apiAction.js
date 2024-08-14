import axios from 'axios';

const fetchMovies = (search = '', count = 1, lang) => (dispatch) => {
    const api = search
        ? `https://api.themoviedb.org/3/search/movie?api_key=b932594aaa08e98c262cc502b4484e3d&query=${search}&language=${lang}&page=${count}`
        : `https://api.themoviedb.org/3/movie/popular?api_key=b932594aaa08e98c262cc502b4484e3d&language=${lang}&page=${count}`;
    return axios.get(api).then((res) => {
        dispatch({
            type: 'GET_MOVIES',
            payload: res.data.results

        })
    }).catch((err) => console.log(err))
}
export default fetchMovies