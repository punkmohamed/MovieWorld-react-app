import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import MovieCard from '../../components/movieCard/movieCard';
import { removeAllWishList } from '../../Store/wishlistSlice';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Wishlist = () => {
    const [wishList, setWishList] = useState([]);
    const wishlistItems = useSelector(state => state.wishlistSlice);
    const dispatch = useDispatch();

    // Get translations from Redux store
    const translate = useSelector(state => state.languageSlice.translation);

    const removeAll = () => {
        dispatch(removeAllWishList());
    };

    useEffect(() => {
        setWishList(wishlistItems);
    }, [wishlistItems]);

    return (
        <div className="container mx-auto d-flex flex-column">
            <h2>{translate.YourWishlist}</h2>
            {wishList.length === 0 ? (
                <>
                    <Link to='/'>
                        <button className='btn btn-danger my-5'>{translate.Home}</button>
                    </Link>
                    <p>{translate.YourWishlistIsEmpty}</p>
                </>
            ) : (
                <div className="row">
                    <button className='btn btn-danger my-5' onClick={removeAll}>
                        {translate.RemoveWishlist}
                    </button>
                    {wishList.map((movie, key) => (
                        <div className="col-md-3 mb-4" key={key}>
                            <MovieCard movie={movie} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Wishlist;
