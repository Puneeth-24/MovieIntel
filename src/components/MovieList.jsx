import React from 'react';
import MovieCard from './MovieCard'

function MovieList({movies}){
    if(!movies || movies.length===0) {
        return <p>No Results to Show </p>
    }

    return(
        <div className="movie-list">
            {movies.map((movie)=>{
                return <MovieCard key={movie.imdbID} movie={movie}/>
            })}
        </div>
    );
}

export default MovieList;