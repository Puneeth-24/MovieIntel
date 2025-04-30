import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import defaultPoster from "../images/default-movie.jpg"
import { ThreeDot } from 'react-loading-indicators';
function MovieDetail(){
    const {id} = useParams();
    const [movie,setMovie]=useState(null);
    const [loading,setLoading] = useState(true);
    const [error,setError]=useState('');

    useEffect(()=>{
        async function fetchMovie (){
            const API_KEY=import.meta.env.VITE_OMDB_API_KEY;
            try{
                const response = await axios(`http://www.omdbapi.com/?i=${id}&plot=full&apikey=${API_KEY}`);
                setMovie(response.data);
            }
            catch(err){
                setError("Failed to fetch data");
            }
            finally{
                setLoading(false);
            }
            
        } 
        fetchMovie();  
    },[id]);

    {if(loading) return <ThreeDot color="#345ebf" size="medium" text="" textColor="" />}
    {if(error) return <p>{error}</p>}

    return(
        <div className="movie-detail">
            <h1>{movie.Title}</h1>
            <img src={movie.Poster!=="N/A"?movie.Poster:defaultPoster} alt={movie.Title} />
            <p><strong>Plot:</strong>{movie.Plot}</p>
            <p><strong>Director:</strong>{movie.Director}</p>
            <p><strong>Writer:</strong>{movie.Writer}</p>
            <p><strong>Genre:</strong>{movie.Genre}</p>
            {movie.totalSeasons && <p><strong>Number of seasons: </strong>{movie.totalSeasons}</p>}
            {movie.totalSeasons && <p><strong>Aired: </strong>{movie.Year}</p>}
            <p><strong>Released:</strong>{movie.Released}</p>
            <p><strong>IMDB Rating:</strong>{movie.imdbRating}</p>
            
        </div>
    );

}

export default MovieDetail;