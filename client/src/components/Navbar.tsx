import { Link,  } from 'react-router-dom';
import { useState } from 'react';
import '../styles/Navbar.css';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';  // Importing the "X" icon
import AUTH from '../utils/auth';
// import SearchRoute from './PrivateRoutes';
// import ErrorPage from '../pages/ErrorPage';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isLoggedIn] = useState(() => AUTH.loggedIn());
  console.log(isLoggedIn)

const userGreeting = () => {
  console.log(AUTH.getProfile())
  return `Hey, ${AUTH.getProfile().username}!`
}
console.log(AUTH.loggedIn())  // Check the result here


  return (
    <>
    <div className='navbar-bar'></div>
      {/* Hamburger Icon */}
      <div
        className="hamburger-icon"
        onClick={() => setIsNavOpen(!isNavOpen)}
        role="button"
        aria-label="Toggle Navigation"
      >
        <FaBars size={30} color="#EADDDD" />
      </div>

      {/* Home Logo (Link to Home) */}
      <Link to="/" className="logo-link">
        <img src="/assets/logo.svg" alt="Home" className="logo" />
      </Link>

      {/* Sign up/Login Link */}
      
      <div className="auth-link">
        {!isLoggedIn ? <Link to="/login">Sign up/Login</Link> : (
          <h4 className = 'userGreetingClass' >{userGreeting()}</h4>
        )}
      </div>

      {/* Side Navigation */}
      <div className={`side-nav ${isNavOpen ? 'open' : ''}`}>
        <button className="close-button" onClick={() => setIsNavOpen(false)}>
          <AiOutlineClose size={30} color="#EADDDD" />
        </button>

        <nav>
          <ul>
            <li>
              <Link to="/search-library">Search Library</Link>
            </li>
            <li>
              <Link to="/search-movies">Search Movies</Link>
            </li>
            {/* <li>
              <Link to="/search-profiles">Search Profiles</Link>
            </li> */}
            <li>
              <Link to="/profile">View My Profile</Link>
            </li>
            {isLoggedIn && (
          <li>
          <a onClick={() => AUTH.logout()}>Logout</a>
          </li>
        )}
          </ul>
        </nav>
        {/* <Routes>
          <Route path="/search-library" element={<SearchRoute />} />
          <Route path="/search-movies" element={<SearchRoute />} />
          <Route path="/error" element={<ErrorPage />} />
        </Routes> */}
      </div>
    </>
    
  );
};

export default Navbar;
