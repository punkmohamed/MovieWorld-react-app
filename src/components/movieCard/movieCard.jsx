import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { addWishlist, removeWishList } from '../../redux/Action';

const MovieCard = ({ movie }) => {
    const history = useHistory()
    const viewMovie = (id) => {
        history.push(`/movieDetails/${id}`)
    }
    const wishlist = useSelector(state => state.WishListReducer)
    console.log(wishlist);


    const dispatch = useDispatch()
    console.log(dispatch);

    const addToWish = (movie) => {
        dispatch(addWishlist(movie))
    }
    const removeFromWish = (id) => {
        dispatch(removeWishList(id))
    }
    const inWishlist = wishlist.find(item => item.id === movie.id);
    console.log(inWishlist);


    return (
        <div className='mb-1 position-relative'>
            <div className="card rounded-5 overflow-hidden">
                <a onClick={() => viewMovie(movie.id)}>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top" alt={movie?.original_title
                    } />
                </a>
                <div className='d-flex justify-content-between align-items-center '>
                    <div className="card-body text-dark">
                        <h5 className="card-title">{movie.original_title
                        }</h5>
                        <p className="card-text text-dark">Year: {movie?.release_date
                        }</p>
                    </div>
                    <div className='me-3 fs-2' onClick={inWishlist ? () => removeFromWish(movie.id) : () => addToWish(movie)}>
                        <i className={inWishlist ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i>
                    </div>
                </div>
            </div>
            <div className={`position-absolute p-3 px-4 ${movie.vote_average > 7 ? 'bg-warning' : 'bg-danger'} top-0 rounded-circle`}>{Math.floor(movie.vote_average)
            }</div>
        </div>
    );
}

export default MovieCard;
