import React, { useState } from 'react';
import { Outlet,Link } from 'react-router-dom';


export default function Layout(){
    const [movies,setMovies]=useState([]);
    return(
        <div className="layout">
            <nav>
            <h1>🎬MovieIntel</h1>
            <Link to="/" className="home-button">← Back to Home</Link>
            </nav>

            <main>
                <Outlet context={{ movies, setMovies }} />
            </main>
        </div>
    );
}
