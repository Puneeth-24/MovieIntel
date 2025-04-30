import React,{useState} from 'react';
import SearchBar from '../components/SearchBar';
import MovieList from "../components/MovieList";
import axios from 'axios';
import { useOutletContext } from 'react-router-dom';
export default function Home(){
    
    const { movies, setMovies } = useOutletContext();
    function clearAll(){
        setMovies([]);
    }
    return (
      <div>
        <SearchBar setMovies={setMovies} />
        <MovieList movies={movies} />
        {movies.length>0 && <button className='clearAll-btn' onClick={clearAll}>Clear All Results</button>}
      </div>
    );
}