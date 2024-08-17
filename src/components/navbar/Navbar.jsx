import { Link } from 'react-router-dom';
import logo from '../../assets/react.svg';
import './style.css'
import { useSelector, useDispatch } from 'react-redux';
import { useContext } from 'react';
import languageContext from '../../context/langContext';
import { setLanguage } from '../../Store/languageSlice';

const Navbar = () => {
    const wishlist = useSelector(state => state.wishlistSlice)
    const translate = useSelector(state => state.languageSlice.translation)

    const { lang, setLang } = useContext(languageContext)
    const dispatch = useDispatch()

    const SwitchToEnglish = () => {
        dispatch(setLanguage("en"))
        setLang("en")
    }

    const SwitchToArabic = () => {
        dispatch(setLanguage("ar"))
        setLang("ar")
    }

    const SwitchToFrench = () => {
        dispatch(setLanguage("fr"))
        setLang("fr")
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between align-items-center px-5">
            <a className="navbar-brand">
                <img src={logo} alt="Logo" style={{ width: '80px' }} />
                <span className="ml-2 text-black">{translate.MovieWorld}</span>
            </a>
            <div className="d-flex justify-content-end">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link text-black" to="/">
                                <i className="fas fa-home"></i> {translate.Home}
                            </Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link text-black" to="/wishlist">
                                <i className="fa-regular fa-heart"></i> {translate.YourWishlist}
                                {wishlist.length > 0 && <span className='bg-danger text-white rounded-5 p-1 text-center'> {wishlist.length}</span>}
                            </Link>
                        </li>

                        <div className="dropdown">
                            <button className="btn btn-danger dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                {lang}
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li><button className="dropdown-item" onClick={SwitchToEnglish}>English</button></li>
                                <li><button className="dropdown-item" onClick={SwitchToArabic}>Arabic</button></li>
                                <li><button className="dropdown-item" onClick={SwitchToFrench}>French</button></li>
                            </ul>
                        </div>
                        <li className="nav-item">
                            <Link className="nav-link text-black" to="/auth">
                                <i className="fas fa-sign-in-alt"></i> {translate.Login}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-black" to="/auth">
                                <i className="fas fa-user-plus"></i> {translate.Register}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
