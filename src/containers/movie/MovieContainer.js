import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAction } from '../../modules/movie';
import MovieListSlider from '../../component/movie/MovieListSlider';

const MovieContainer = (props) => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        console.log('------useEffect()----');
        dispatch(fetchAction());
    }, []);

    const actionData = useSelector(state => state.movie.movies,[]) || [];
    console.log(actionData);
    return (
        <div>
                {/* {
                    actionData.results && actionData.results.map(movie =>(
                        <MovieListSlider key={movie.id} title={movie.title} />
                    ))
                } */}
                <MovieListSlider movies={actionData}/>
                
           
        </div>
    )
}

export default MovieContainer;