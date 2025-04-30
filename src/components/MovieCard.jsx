import React from 'react';
import {Link} from 'react-router-dom';
import defaultPoster from "../images/default-movie.jpg"
function MovieCard({movie}){
    let posterLink;
    if(movie.Poster!='N/A'){
        posterLink=movie.Poster;
    }else{
        posterLink=defaultPoster;
    }
    return(
        <div className="movie-card">
            
            <Link to={`/movie/${movie.imdbID}`}>
                <img style={{ height:'200px'}} src={posterLink} onError={`this.onerror=null; this.src=${posterLink}`} alt={movie.Title} />
                
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
            </Link>
        </div>
    )
}

export default MovieCard;