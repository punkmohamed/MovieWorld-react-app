import { useEffect, useState } from "react";
import './style.css';
import axios from "axios";
import MovieCard from './../../components/movieCard/movieCard';

const Home = () => {
    const [moviesList, setMoviesList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState(null);
    const [count, setCount] = useState(1);

    const fetchData = async (api) => {
        setLoading(true)
        try {
            const response = await axios.get(api);
            const data = response.data.results;
            setMoviesList(data);
            console.log(data);
            setLoading(false)
        } catch (error) {
            console.log(error);
        }
    }

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const handleSubmit = () => {
        let api = `https://api.themoviedb.org/3/search/movie?api_key=b932594aaa08e98c262cc502b4484e3d&query=${search}`;
        fetchData(api);
    };

    const handleReturn = () => {
        setSearch('');
        setCount(1);
        let api = `https://api.themoviedb.org/3/movie/popular?api_key=b932594aaa08e98c262cc502b4484e3d&page=${count}`;
        fetchData(api);
    };

    useEffect(() => {
        let url = `https://api.themoviedb.org/3/movie/popular?api_key=b932594aaa08e98c262cc502b4484e3d&page=${count}`;
        fetchData(url);
    }, [count]);

    if (loading) {
        return <div>Loading...</div>;
    }

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