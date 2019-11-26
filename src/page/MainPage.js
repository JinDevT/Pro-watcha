import React from 'react';
import Main from '../component/main/Main';
import MainSlider from '../component/main/MainSlider';
import MovieLayout from '../component/movie/MovieLayout';
import ActionMovieContainer from '../containers/movie/AcationMovieContainer';
import ComedyMovieContainer from '../containers/movie/ComedyMovieContainer';
import RomanceMovieContainer from '../containers/movie/RomanceMovieContainer';
import AnimationMovieContainer from '../containers/movie/AnimationMovieContainer';
import HorrorMovieContainer from '../containers/movie/HorrorMovieContainer';


const MainPage = () => {
    return(
        <Main>
            <MainSlider/>
            <MovieLayout>
                <ActionMovieContainer />
                <ComedyMovieContainer />
                <RomanceMovieContainer />
                <AnimationMovieContainer />
                <HorrorMovieContainer />
            </MovieLayout>
            
                
                
           
            
        </Main>
    );
}

export default MainPage;