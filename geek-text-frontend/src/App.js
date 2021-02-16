import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Homepage from './components/Homepage.component';
import Sign_in from './components/Sign_in.component';
import Sign_up from './components/Sign_up.component';
import Browse from './components/Browse.component';
import Profile from './components/Profile.component';
import Wish_list from './components/Wish_list.component';
import Cart from './components/Cart.component';
import Sign_out from './components/Sign_out.component';

import logo from './Logo.png';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <img src={logo} width="120" height="30" alt="Geek Text" />
        </a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">Homepage (test)</Link>
            </li>
            <li className="navbar-item">
              <Link to="/sign-in" className="nav-link">Sign in</Link>
            </li>
            <li className="navbar-item">
              <Link to="/sign-up" className="nav-link">Sign up</Link>
            </li>
            <li className="navbar-item">
              <Link to="/browse" className="nav-link">Browse</Link>
            </li>
            <li className="navbar-item">
              <Link to="/profile" className="nav-link">Profile</Link>
            </li>
            <li className="navbar-item">
              <Link to="/wishlist" className="nav-link">Wish list</Link>
            </li>
            <li className="navbar-item">
              <Link to="/cart" className="nav-link">Cart</Link>
            </li>
            <li className="navbar-item">
              <Link to="/sign-out" className="nav-link">Sign out</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Route path="/" exact component={Homepage} />
      <Route path="/sign-in" component={Sign_in} />
      <Route path="/sign-up" component={Sign_up} />
      <Route path="/browse" component={Browse} />
      <Route path="/profile" component={Profile} />
      <Route path="/wishlist" component={Wish_list} />
      <Route path="/cart" component={Cart} />
      <Route path="/sign-out" component={Sign_out} />
    </Router>
  );
}

export default App;
