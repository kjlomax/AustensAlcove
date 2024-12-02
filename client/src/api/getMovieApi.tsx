
import Auth from '../utils/auth';
const retrieveMovies = async () => {
  try {
    console.log("Fetching movies...");
    const response = await fetch('/api/movies', { 
      method: 'GET',
      headers: {
        'Content-Type':'application/json',
        Authorization: `Bearer ${Auth.getToken()} `,
      }
    });
                                                                           
    // Check if the response is ok before parsing JSON
    if (!response.ok) {
      throw new Error(`Error fetching movies: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Data fetched:", data);
    return data;
  } catch (err) {
    console.log('Error from data retrieval:', err);
    return [];
  }
};
const deleteMovie = async (id:number) => {
  try {
    console.log("deleting movies...");
    const response = await fetch(`/api/movies/${id}`, { 
      method: 'DELETE',
      headers: {
        'Content-Type':'application/json',
        Authorization: `Bearer ${Auth.getToken()} `,
      }
    });
                                                                           
    if (!response.ok) {
      throw new Error(`Error deleting movie: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("movie deleted:", data);
    return data;
  } catch (err) {
    console.log('Error from deleteMovie:', err);
    return [];
  }
};


export {retrieveMovies, deleteMovie};