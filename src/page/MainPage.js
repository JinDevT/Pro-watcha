import React from 'react';
import Main from '../component/main/Main';
import MainSlider from '../component/main/MainSlider';
import MoviList from '../component/movie/MovieList';
import MovieListSlider from '../component/movie/MovieListSlider';
import Test from '../component/movie/Test';

const MainPage = () => {
    return(
        <Main>
            <MainSlider/>
            <MoviList>
                <MovieListSlider/>
            </MoviList>  
            
        </Main>
    );
}

export default MainPage;