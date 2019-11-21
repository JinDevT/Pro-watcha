import React from 'react';
import Main from '../component/main/Main';
import MainSlider from '../component/main/MainSlider';
import MoviList from '../component/movie/MovieList';
import MovieContainer from '../containers/movie/MovieContainer';


const MainPage = () => {
    return(
        <Main>
            <MainSlider/>
            <MoviList>
                <MovieContainer />
            </MoviList>  
            
        </Main>
    );
}

export default MainPage;