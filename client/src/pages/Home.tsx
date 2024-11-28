// import React from 'react';
import Carousel from '../components/Carousel';
import Button from '../components/Button'; 
import '../styles/Home.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Home = () => {

  const navigate = useNavigate();

  const handlePrevious = () => {
    console.log('Previous button clicked');
    // Implement previous button logic
    <Link to="/SignUp"> </Link>
    navigate(`/SignUp`);
  };

  const handleNext = () => {
    console.log('Next button clicked');
    // Implement next button logic
    
  };

  return (
    <div className="home">
      <header className="hero-section">
        <h1 className="hero-title">Austen's Alcove</h1>
        <h2 className="suggestion-title">Need a suggestion?</h2>
      </header>
      {/* <section className="carousel-section"> */}
        <Carousel />
      {/* </section> */}
      <section className="button-section">
        
        <Button text="Create a Profile"  onClick={handlePrevious} variant="left" /> 
        <Button text="Search for Readers" onClick={handleNext} variant="right" />
      </section>
    </div>
  );
};

export default Home;
