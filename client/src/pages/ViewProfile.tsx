
import { useState,useEffect } from "react";
import {retrieveMovies, deleteMovie} from '../api/getMovieApi'
import {Movies} from '../interfaces/Movie'
import AUTH from '../utils/auth';
import '../styles/login.css'
import {getBook} from '../api/getBook'
const ViewProfile=()=>{
    const [datas, setData] = useState([])
    const[movieData, setMovieData]= useState<Movies[]>([])
    useEffect(()=>{
        getBook()
            .then((data)=> setData(data))
            .catch((err)=> console.log(err))
    },[])
    useEffect(() => {
        console.log("Fetching movies...");
        const fetchData = async () => {
          const movies = await retrieveMovies();
          console.log("Movies fetched:", movies);
          setMovieData(movies);
        };
        fetchData();
      }, []);
console.log(AUTH.getProfile().username)
console.log(datas)
      const handleDelete = async(id:number)=>{
        try {
            await deleteMovie(id)
            const movies = await retrieveMovies()
            setMovieData(movies)
        } catch (err) {
            console.log(`could not delete`, err)
        }
        // deleteMovie(id).then((result)=>{
        //     console.log(result)
        // }).catch((err)=>{
        //     console.log(`could not delete`, err)
        // })
      }
    return(
        <div className='all'>
            <div className='padd'>
            <h2>{AUTH.getProfile().username}</h2>
           </div>

           <h2>Your books</h2>
            <div >

            </div>
           
            {movieData.map((movie) => (
                <div key={movie.id} >
                    <img src={movie.poster } alt={movie.title } />
                    <h2>{movie.title }</h2>
                    <p>Directed By: {movie.director }</p>
                    <p>Released: {movie.year }</p>
                    <p>Genre: {movie.genre }</p>
                    <p>Plot: {movie.plot }</p>
                    <button onClick={() => handleDelete(movie.id)}>delete</button>
                </div>
            ))}
                        
            
        </div>
             
        
    
    )


}


export default ViewProfile;