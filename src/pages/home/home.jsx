import { useContext, useEffect, useState } from "react";
import './style.css';
import MovieCard from './../../components/movieCard/movieCard';
import { useDispatch, useSelector } from "react-redux";
import languageContext from "../../context/langContext";
import { getMovie } from "../../Store/apiSlice";

const Home = () => {
    const [search, setSearch] = useState('');
    const [count, setCount] = useState(1);
    const { lang } = useContext(languageContext);
    const translate = useSelector(state => state.languageSlice.translation);
    const moviesList = useSelector(state => state.fetchDataSlice.list);
    const dispatch = useDispatch();

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const handleSubmit = () => {
        setCount(1);
        dispatch(getMovie({ search, count: 1, lang }));
    };

    const handleReturn = () => {
        setSearch('');
        setCount(1);
        dispatch(getMovie({ search: '', count: 1, lang }));
    };

    useEffect(() => {
        dispatch(getMovie({ search, count, lang }));
    }, [dispatch, search, count, lang]);

    return (
        <div className="container mt-5">
            <div>
                <h1 className="text-center mb-4">{translate.MovieWorld}</h1>
                <div className="d-flex justify-content-center mb-4">
                    <input
                        type="text"
                        className="form-control me-2"
                        placeholder={translate.Search}
                        value={search}
                        onChange={handleSearch}
                    />
                    <button className="btn btn-danger mx-5" onClick={handleSubmit}>{translate.Search}</button>
                    <button className="btn btn-light text-danger" onClick={handleReturn}>{translate.Return}</button>
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
                    <p className="text-center">{translate['No movies found. Please try a different search.']}</p>
                )}
                {moviesList.length === 0 && search ? (
                    <button className="btn btn-light text-danger" onClick={handleReturn}>{translate.Return}</button>
                ) : (
                    <div className="d-flex justify-content-center align-items-center">
                        {count > 1 && <button className="btn btn-light text-danger mx-4" onClick={() => setCount(count - 1)}>{translate.Previous}</button>}
                        <button className="btn btn-light text-danger" onClick={() => setCount(count + 1)}>{translate.Next}</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
