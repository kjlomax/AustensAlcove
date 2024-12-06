// add get movies based on search, delete movies, post movies onto profile
// const api = import.meta.env.VITE_OMDB_KEY;

import Auth from '../utils/auth';
const api_Url = `https://www.omdbapi.com/`;
const searchMovie = async (query:string)=>{
    try {
        const queryWithPlus = encodeURIComponent(query).replace(/%20/g, '+');
        const response = await fetch (`${api_Url}?s=${queryWithPlus}&apikey=4ff277ea`, );
        const data = await response.json();
        console.log("here more data related to api"+data);
        if (data.Response === 'True') {
          const movieDetail=data.Search.map(async(movie:any)=>{
          const movieDetailResponse = await fetch(`${api_Url}?i=${movie.imdbID}&apikey=4ff277ea`)
          const movieDetailData = await movieDetailResponse.json();
          return movieDetailData;
          })
          const movieDetails = await Promise.all(movieDetail);
          return movieDetails; 
        } else {
          console.error("Movie not found:", data.Error);
          return []; // Return null if the movie is not found
        }
      } catch (err) {
        console.error('Error fetching movies:', err);
        return []; // Return null if an error occurs during the fetch
      }
    
}
console.log(` here ${import.meta.env.VITE_OMDB_KEY}`)
const searchMoviesID = async () => {
  try {
    const start = Math.floor(Math.random() * 99999) + 1;
    console.log(`Searching for movie with ID: tt0${start}`);
    const response = await fetch(
      `https://www.omdbapi.com/?i=tt00${start}&apikey=4ff277ea`
    );
    const data = await response.json();

    if (!response.ok || data.Error) {
      throw new Error('Movie not found or invalid response');
    }
    if(data.Type === 'movie' && data.Poster ){
      return data;
    }else{
    return null;
    }
  } catch (err) {
    console.log('An error occurred:', err);
    return null; // Return null if no valid movie is found
  }
};

  const saveMovie= async(movieData:any)=>{
    try {
      const response =  await fetch(`api/movies`,{
        method: 'POST',
        headers: {
          'Content-Type':'application/json',
          Authorization: `Bearer ${Auth.getToken()} `
        },
        body: JSON.stringify(movieData)
      })
      const result = await response.json();
      if (!response) {
        throw new Error(result.message|| `failed to save`)
      }
      return result;
    } catch (error) {
        console.error(`error in the saveMovie`)
        throw error;
    }
    
  }
  export {searchMoviesID,searchMovie,saveMovie}