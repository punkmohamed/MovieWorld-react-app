import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { addWishList, removeWishlist } from '../../Store/wishlistSlice';

const MovieCard = ({ movie }) => {
    const history = useHistory();
    const wishlist = useSelector(state => state.wishlistSlice);
    const translate = useSelector(state => state.languageSlice.translation);
    const dispatch = useDispatch();

    const viewMovie = (id) => {
        history.push(`/movieDetails/${id}`);
    };

    const addToWish = (movie) => {
        dispatch(addWishList(movie));
    };

    const removeFromWish = (id) => {
        dispatch(removeWishlist(id));
    };

    const inWishlist = wishlist.find(item => item.id === movie.id);

    return (
        <div className='mb-1 position-relative'>
            <div className="card rounded-5 overflow-hidden">
                <a onClick={() => viewMovie(movie.id)}>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top" alt={movie?.original_title} />
                </a>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className="card-body text-dark">
                        <h5 className="card-title text-truncate">{movie.original_title}</h5>
                        <p className="card-text text-dark">{translate.Year}: {movie?.release_date}</p>
                    </div>
                    <div className='me-3 fs-2' onClick={inWishlist ? () => removeFromWish(movie.id) : () => addToWish(movie)}>
                        <i className={inWishlist ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i>
                    </div>
                </div>
            </div>
            <div className={`position-absolute p-3 px-4 ${movie.vote_average > 7 ? 'bg-warning' : 'bg-danger'} top-0 rounded-circle`}>
                {Math.floor(movie.vote_average)}
            </div>
        </div>
    );
};

export default MovieCard;
