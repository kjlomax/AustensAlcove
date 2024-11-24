import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import auth from '../utils/auth';

// todos set up navigation for the routes, akaa links
//example <Link to = "/routes classname="styling"> SearchLibary</Link>
const Navbar = () => {
  
  return (
      <>
      
      <Link to="/searchLibary">Search Libary</Link>
      <Link to="/searchProfiles">Search Profiles</Link>
      <Link to="/searchMovies">Search Movies</Link>
      <Link to="/login"></Link>
      <Link to="/viewProfile"></Link>
      </>
  );
};

export default Navbar;
