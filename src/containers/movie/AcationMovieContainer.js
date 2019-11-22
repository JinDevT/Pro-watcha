import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAction } from '../../modules/movie';
import MovieListSlider from '../../component/movie/MovieListSlider';
import MovieList from '../../component/movie/MovieList';


const ActionMovieContainer = (props) => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        console.log('------useEffect()----');
        dispatch(fetchAction());
    }, []);

    const actionData = useSelector(state => state.action.movies,[]) || [];
    return (
        <>
            <h3>Action</h3>
            <MovieList>
                { actionData.results && actionData.results.map(movie => ( 
                    <MovieListSlider 
                        key={movie.id}
                        title={movie.title}
                        overview={movie.overview}
                        poster={movie.poster_path}
                        backImg={movie.backdrop_path}
                    /> 
                ))}
            
            </MovieList>
        </>
    )
}

export default ActionMovieContainer;