import React from 'react';
import Main from '../component/main/Main';
import MainSlider from '../component/main/MainSlider';
import MovieLayout from '../component/movie/MovieLayout';
import ActionMovieContainer from '../containers/movie/AcationMovieContainer';
import ComedyMovieContainer from '../containers/movie/ComedyMovieContainer';


const MainPage = () => {
    return(
        <Main>
            <MainSlider/>
            <MovieLayout>
                <ActionMovieContainer />
                <ComedyMovieContainer />
            </MovieLayout>
            
                
                
           
            
        </Main>
    );
}

export default MainPage;