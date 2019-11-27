import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getHorror } from '../../modules/movie';
import MovieListSlider from '../../component/movie/MovieListSlider';
import MovieList from '../../component/movie/MovieList';

const HorrorMovieContainer = () => {
    const horrorData = useSelector(state => state.horror.movies,[]) || [];
    const dispatch = useDispatch();
    
    useEffect(() => {
        console.log('------useEffect()----');
        dispatch(getHorror());
    }, [dispatch]);

    return (
        <>
            <h3>Horror Movie</h3>
            <MovieList>
                { horrorData.results && horrorData.results.map(movie => ( 
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

export default HorrorMovieContainer;