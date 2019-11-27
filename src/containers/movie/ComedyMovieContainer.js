import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getComedy } from '../../modules/movie';
import MovieListSlider from '../../component/movie/MovieListSlider';
import MovieList from '../../component/movie/MovieList';

const ComedyMovieContainer = (props) => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        console.log('------useEffect()----');
        dispatch(getComedy());
    }, [dispatch]);

    const comedyData = useSelector(state => state.comedy.movies,[]) || [];
    return (
        <>
            <h3>Comedy Movie</h3>
            <MovieList>
                { comedyData.results && comedyData.results.map(movie => ( 
                    <MovieListSlider 
                        key={movie.id}
                        title={movie.title} //타이틀
                        average={movie.vote_average} // 평점
                        overview={movie.overview} //정보
                        poster={movie.poster_path} //포스터
                        date={movie.release_date} //출시일
                        backImg={movie.backdrop_path} //배경화면
                    /> 
                ))}
        
            </MovieList>
        </>
        
    )
}

export default ComedyMovieContainer;