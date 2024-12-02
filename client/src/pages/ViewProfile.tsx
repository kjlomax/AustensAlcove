import { useState, useEffect } from "react";
import { retrieveMovies, deleteMovie } from "../api/getMovieApi";
import { Movies } from "../interfaces/Movie";
import AUTH from "../utils/auth";
import "../styles/ViewProfile.css";

const ViewProfile = () => {
  const [movieData, setMovieData] = useState<Movies[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movies = await retrieveMovies();
        setMovieData(movies);
      } catch (err) {
        console.error("Error fetching movies:", err);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await deleteMovie(id);
      const movies = await retrieveMovies();
      setMovieData(movies);
    } catch (err) {
      console.error(`Could not delete movie:`, err);
    }
  };

  return (
    <div className="profile-container">
      <header className="profile-header">
        <h1 className="profile-username">Welcome, {AUTH.getProfile().username}</h1>
        <h2 className="profile-collection-title">Your Movie Collection</h2>
      </header>

      <section className="movie-collection">
        {movieData.length === 0 ? (
          <p className="no-movies-message">No movies found in your collection.</p>
        ) : (
          movieData.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img
                src={movie.poster || "/default-image.jpg"}
                alt={movie.title}
                className="movie-poster"
              />
              <h2 className="movie-title">{movie.title}</h2>
              <p className="movie-director">Directed By: {movie.director}</p>
              <p className="movie-year">Released: {movie.year}</p>
              <p className="movie-genre">Genre: {movie.genre}</p>
              <p className="movie-plot">Plot: {movie.plot}</p>
              <button
                className="delete-movie-button"
                onClick={() => handleDelete(movie.id)}
              >
                Delete from Collection
              </button>
            </div>
          ))
        )}
      </section>
    </div>
  );
};

export default ViewProfile;
