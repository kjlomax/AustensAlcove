// search place for movies
import type {Movies} from '../interfaces/MovieData'
import{useState,useEffect} from 'react'
import {searchMoviesID,searchMovie, saveMovie} from '../api/moviesAPI'
const Movies=()=>{
    const [query, setQuery] = useState('');
    const [movieList, setMovieList] = useState<Movies[]>([]);
    const [randomMovie, setRandomMovie] = useState<Movies| null>(null); 
    const [movie, setMovie]= useState<Movies>({ Title: '',
      Genre: '',
      Plot: '',
      Director: '',
      Poster: '',
      Year: '',
    })

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
        if (data && data) {
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
    

  

    const addToList = async (movie:Movies) => {
      const data = {
        Title: movie.Title,
        Genre: movie.Genre,
        Plot: movie.Plot,
        Director: movie.Director,
        Poster: movie.Poster,
        Year: movie.Year,
      }
      try{
        const result= await saveMovie(data);
        console.log(`movie saved`)
        console.log(result)
      } catch(err){
        console.log(`couldnt save movie`)
      }
    }


    // console.log(movieList?.Title)


    return (
      <div>
        <section>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for a movie"
          />
          <button onClick={handleSearch}>Search</button>
        </section>

      

        <section>
          <h2>Search Results</h2>
          <div className="">
            {movieList.length === 0 ? (
              <p>No movies found</p> 
            ) : (
              movieList.map((movie) => (
                <div key={movie.Title} className="">
                   <figure>
              <img src={movie.Poster } alt={movie.Title} />
            </figure>
            <article>
              <h2>{movie.Title}</h2>
              <p>Directed By: {movie.Director}</p>
              <p>Released: {movie.Year}</p>
              <p>Genre: {movie.Genre}</p>
            </article>
            <article>
              <p>Plot: {movie.Plot}</p>
            </article>
                  <button onClick={() => addToList(movie)}>Save to Database</button>
                </div>
              ))
            )}
          </div>
        </section>

      
        {randomMovie && (
        <section>
          <h2>Random Movie</h2>
          <div className="random-movie">
            <img src={randomMovie.Poster || '/default-image.jpg'} alt={randomMovie.Title} />
            <h3>{randomMovie.Title}</h3>
            <h3>{randomMovie.Genre}</h3>
            <button onClick={() => addToList(randomMovie)}>Save to Database</button>
          </div>
        </section>
      )}
    </div>
  );
};
export default Movies;