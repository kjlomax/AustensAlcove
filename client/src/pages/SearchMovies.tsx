import { useState, useEffect } from 'react';
import { searchMoviesID, searchMovie, saveMovie } from '../api/moviesAPI';
import '../styles/Movies.css';
import type { Movies } from '../interfaces/MovieData';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movieList, setMovieList] = useState<Movies[]>([]);
  const [randomMovie, setRandomMovie] = useState<Movies | null>(null); 


  useEffect(() => {
    const fetchRandomMovies = async () => {
      try {
        const data = await searchMoviesID();
        if (data) {
          console.log('Random movie data:', data);
          setRandomMovie(data); // Ensure data matches the Movies structure
        }
      } catch (error) {
        console.error('Error fetching random movie:', error);
      }
    };

    fetchRandomMovies();
  }, []);

  const fetchMovieByTitle = async () => {
    if (query.trim() === '') return;
    try {
      const data = await searchMovie(query);
      console.log(`data here${query}`);
      if (data) {
        setMovieList(data);
      } else {
        setMovieList([]);  
      }
    } catch (error) {
      console.error('Error fetching movie:', error);
    }
  };

  const handleSearch = () => {
    fetchMovieByTitle();
  };

  const addToList = async (movie: Movies) => {
    const data = {
      Title: movie.Title,
      Genre: movie.Genre,
      Plot: movie.Plot,
      Director: movie.Director,
      Poster: movie.Poster,
      Year: movie.Year,
    };
    try {
      const result = await saveMovie(data);
      console.log('movie saved');
      console.log(result);
    } catch (err) {
      console.log('couldnt save movie');
    }
  };

  return (
    <>
      <div className="movies-page">
      <h1>Search the Alcove's Movies</h1>
        <section className="search-section">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for a movie"
          />
          <button onClick={handleSearch}>Search</button>
        </section>
        <h2>Search Results</h2>
        <section className="search-results">
          {movieList.length === 1 ? (
            <p>No movies found</p>
          ) : (
            movieList.map((movie) => (
              <div key={movie.Title} className="movie-card">
                <img src={movie.Poster || '/default-image.jpg'} alt={movie.Title} />
                <h2>{movie.Title}</h2>
                <p>Directed By: {movie.Director}</p>
                <p>Released: {movie.Year}</p>
                <p>Genre: {movie.Genre}</p>
                <p>Plot: {movie.Plot}</p>
                <button onClick={() => addToList(movie)}>Save to Database</button>
              </div>
            ))
          )}
        </section>

        {randomMovie && (
          <section className="random-movie">
            <h2>Random Movie</h2>
            <img src={randomMovie.Poster || '/default-image.jpg'} alt={randomMovie.Title} />
            <h3>{randomMovie.Title}</h3>
            <h3>{randomMovie.Genre}</h3>
            <button onClick={() => addToList(randomMovie)}>Save to Database</button>
          </section>
        )}
      </div>
    </>
  );
};

export default Movies;
