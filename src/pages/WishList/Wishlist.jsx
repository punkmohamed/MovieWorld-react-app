
import { useDispatch, useSelector } from 'react-redux';

import { useEffect, useState } from 'react';
import MovieCard from '../../components/movieCard/movieCard';
import { removeAllWishList } from '../../redux/Action';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Wishlist = () => {
    const [wishList, setWishList] = useState([])
    const wishlistItems = useSelector(state => state.WishListReducer)
    const despatch = useDispatch()
    const history = useHistory()

    const removeAll = () => {
        despatch(removeAllWishList())
    }


    useEffect(() => {
        setWishList(wishlistItems)
    }, [wishlistItems])
    return (
        <div className="container mx-auto d-flex flex-column">
            <h2>Your Wishlist</h2>
            {wishList.length === 0 ? (
                <>
                    <Link to='/'> <button className='btn btn-danger my-5'>Home</button></Link>

                    <p>Your wishlist is empty.</p>
                </>
            ) : (
                <div className="row">
                    <button className='btn btn-danger my-5' onClick={() => removeAll()}>Remove Wishlist</button>
                    {wishList.map((movie, key) => (
                        <div className="col-md-3 mb-4" key={key}>
                            <MovieCard movie={movie} />
                        </div>
                    ))}
                </div>
            )
            }
        </div >
    );
};

export default Wishlist;
