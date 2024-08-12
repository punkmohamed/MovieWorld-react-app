
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import UserAuth from './pages/userAuthentications/userAuth';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/home';
import MovieDetails from './pages/movieDetails/movieDetails';
import Wishlist from './pages/WishList/Wishlist';
function App() {

    return (
        <div>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/auth" component={UserAuth} exact />
                    <Route path="/movieDetails/:id" component={MovieDetails} exact />
                    <Route path="/WishList" component={Wishlist} exact />
                </Switch>
            </Router>
        </div>
    );
}

export default App
