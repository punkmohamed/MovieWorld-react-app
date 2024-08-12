import { Link } from 'react-router-dom';
import logo from '../../assets/react.svg';
import './style.css'
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
const Navbar = () => {
    const wishlist = useSelector(state => state.WishListReducer)

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between align-items-center px-5">
            <a className="navbar-brand" href="/">
                <img src={logo} alt="Logo" style={{ width: '80px' }} />
                <span className="ml-2 text-black">MovieWorld</span>
            </a>
            <div className="d-flex justify-content-end">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link text-black" to="/">
                                <i className="fas fa-home"></i> Home
                            </Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link text-black" to="/wishlist">
                                <i className="fa-regular fa-heart"></i> WishList
                                {wishlist.length > 0 && <span className='bg-danger text-white rounded-5 p-1 text-center'> {wishlist.length}</span>}
                            </Link>

                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-black" to="/auth">
                                <i className="fas fa-sign-in-alt"></i> Login
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-black" to="/auth">
                                <i className="fas fa-user-plus"></i> Register
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;