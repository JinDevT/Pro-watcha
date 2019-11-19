import React, { useState, useEffect } from 'react';
import axios from 'axios';









const MovieListSlider = () => {

   
    const [ movies, setMovie ] = useState(null);

    const API_KEY = 'a158e2a9424bc69fec449dcaeb82aba8';
    const API_URL = `https://api.themoviedb.org/3`;
    const Genre =`${API_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`

    useEffect(() =>{
        const fetchMovies = async () => {
            try {
                setMovie(null);
                const response = await axios.get(Genre);
                setMovie(response.data);
                console.log(response.data);
            } catch (e) {
                throw(e);
            }
        };
        fetchMovies();
    },[]);

    if(!movies) return null


    return(
            <ul>
                { movies.map(movie => (
                    <li>{movie.name}</li>
                ))}
            </ul>
    );
}

export default MovieListSlider;