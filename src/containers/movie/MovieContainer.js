import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAction } from '../../store/actions/index';
import MovieListSlider from '../../component/movie/MovieListSlider';

const MovieContainer = (props) => {
    const dispatch = useDispatch();
    const actionData = useSelector(state => state.action);
    const [movies, setMovies] = useState(actionData);
    console.log(movies);

    

    useEffect(() => {
        dispatch(fetchAction);
    }, []);

    return (
        <div>
            { movies.map(movie => (
                <MovieListSlider  key={movie.id} titlt={movie.title}/>
            ))}
        </div>
    )
}

export default MovieContainer;