import React from 'react';
import Main from '../component/main/Main';
import MainSlider from '../component/main/MainSlider';
import MoviList from '../component/movie/MovieList';
import MovieListSlider from '../component/movie/MovieListSlider';


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