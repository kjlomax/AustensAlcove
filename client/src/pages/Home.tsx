import Carousel from '../components/Carousel';
import Button from '../components/Button'; 
import '../styles/Home.css';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const Home = () => {
  const navigate = useNavigate();

  const handlePrevious = () => {
    console.log('Previous button clicked');
    navigate(`/SignUp`);
  };

  const handleNext = () => {
    console.log('Next button clicked');
    navigate(`/search-library`);
  };

  const handleSearchMovies = () => {
    console.log('Search Movies button clicked');
    navigate(`/search-movies`);
  };

  return (
    <div className="home">
      <header className="hero-section">
        <h1 className="hero-title">Austen's Alcove</h1>
        <h2 className="suggestion-title">Pray, in need of a little counsel?</h2>
      </header>
      <Carousel />
      <section className="button-section">
        <Button text="Create a Profile" onClick={handlePrevious} variant="left" />
        <Button text="Search Library" onClick={handleNext} variant="right" />
      </section>
      <section className="image-text-section">
        <div className="image-container">
          <img src="/assets/austen-bust.png" alt="A cozy alcove" className="home-image" />
        </div>
        <div className="text-container">
          <h2 className="text-title">Welcome to the Alcove</h2>
          <p className="text-description">
            Discover a haven for book and film enthusiasts, where timeless tales and modern literature converge. Explore, share, and connect with fellow readers and cinephiles in this unique literary and cinematic community.
          </p>
          <p className="text-description">
            For those with a taste for the silver screen, fear not! Austen’s Alcove delights not only in the printed page but also in the moving picture. Whether you swoon at the charm of Mr. Darcy on film or revel in the wit of cinematic adaptations, here you shall find much to adore and discuss.
          </p>
          <Button text="Search Movies" onClick={handleSearchMovies} variant="primary" />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
