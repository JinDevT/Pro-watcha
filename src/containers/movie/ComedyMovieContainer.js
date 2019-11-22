import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchComedy } from '../../modules/movie';
import MovieListSlider from '../../component/movie/MovieListSlider';
import MovieList from '../../component/movie/MovieList';

const ComedyMovieContainer = (props) => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        console.log('------useEffect()----');
        dispatch(fetchComedy());
    }, []);

    const comedyData = useSelector(state => state.comedy.movies,[]) || [];
    return (
        <>
            <h3>Comedy</h3>
            <MovieList>
                { comedyData.results && comedyData.results.map(movie => ( 
                    <MovieListSlider 
                        key={movie.id}
                        title={movie.title}
                        poster={movie.poster_path}
                        
                    /> 
                ))}
        
            </MovieList>
        </>
        
    )
}

export default ComedyMovieContainer;