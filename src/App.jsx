
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import UserAuth from './pages/userAuthentications/userAuth';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/home';
import MovieDetails from './pages/movieDetails/movieDetails';
import Wishlist from './pages/WishList/Wishlist';
import languageContext from './context/langContext';
import { useState } from 'react';
function App() {
    const [lang, setLang] = useState('en')
    return (
        <div>
            <Router>
                <languageContext.Provider value={{ lang, setLang }}>
                    <Navbar />
                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route path="/auth" component={UserAuth} exact />
                        <Route path="/movieDetails/:id" component={MovieDetails} exact />
                        <Route path="/WishList" component={Wishlist} exact />
                    </Switch>
                </languageContext.Provider>
            </Router>
        </div>
    );
}

export default App
