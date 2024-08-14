import { useContext, useEffect, useState } from "react";
import './style.css';
import MovieCard from './../../components/movieCard/movieCard';
import { useDispatch, useSelector } from "react-redux";
import fetchMovies from "../../redux/Actions/apiAction";
import languageContext from "../../context/langContext";

const Home = () => {

    const [search, setSearch] = useState(null);
    const [count, setCount] = useState(1);
    const { lang } = useContext(languageContext)
    const moviesList = useSelector(state => state.apiReducer.list)
    console.log(moviesList)
    const dispatch = useDispatch()
    // dispatch(fetchMovies('', 1, lang))

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const handleSubmit = () => {
        setCount(1)
        dispatch(fetchMovies(search))
    };

    const handleReturn = () => {
        setSearch('');
        setCount(1);
        dispatch(fetchMovies('', 1, lang))
    };

    useEffect(() => {
        dispatch(fetchMovies(search, count, lang))
    }, [dispatch, search, count, lang]);

    // if (loading) {
    //     return <div>Loading...</div>;
    // }

    return (
        <div className="container mt-5">
            <div>
                <h1 className="text-center mb-4">MovieWorld</h1>
                <div className="d-flex justify-content-center mb-4">
                    <input
                        type="text"
                        className="form-control me-2"
                        placeholder='Search for movies'
                        value={search}
                        onChange={handleSearch}
                    />
                    <button className="btn btn-danger mx-5" onClick={handleSubmit}>Search</button>
                    <button className="btn btn-light text-danger" onClick={handleReturn}>return</button>

                </div>
            </div>
            <div>
                {moviesList.length > 0 ? (
                    <div className="row">
                        {moviesList.map((movie, key) => (
                            <div className="col-md-3 mb-4" key={key}>
                                <MovieCard movie={movie} />
                            </div>
                        ))}
                    </div>

                ) : (
                    <p className="text-center">No movies found. Please try a different search.</p>

                )}
                {moviesList.length === 0 && search ? <button className="btn btn-light text-danger" onClick={handleReturn}>return</button> : <div className="d-flex justify-content-center align-items-center ">
                    {count > 1 && <button className="btn btn-light text-danger mx-4" onClick={() => setCount(count - 1)}>previous</button>}
                    <button className="btn btn-light text-danger" onClick={() => setCount(count + 1)}>next</button>

                </div>}
            </div>
        </div >
    );
};

export default Home;