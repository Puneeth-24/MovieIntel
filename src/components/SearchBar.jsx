import React from 'react';
import {useState} from 'react';
import axios from 'axios';
function SearchBar({ setMovies }) {
    const [query, setQuery] = useState("");
    const API_KEY=import.meta.env.VITE_OMDB_API_KEY;
    async function handleSearch() {
      if (query.trim().length === 0) return;
  
      try {
        const response = await axios.get(
          `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
        );
        if (response.data.Search) {
          setMovies(response.data.Search);
        } else {
          setMovies([]);
        }
      } catch (err) {
        console.error("API error", err);
        setMovies([]);
      }
    }
  
    return (
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search movies / tv shows..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    );
  }

export default SearchBar;