import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './page/HomePage.js';
import StartPage from './page/StartPage.js';
import MainPage from './page/MainPage.js';
import MoviePlay from './component/movie/MoviePlay';

const App = () =>  {
    return (
      <>
        <Route path='/' component={HomePage} exact={true} />
        <Route path='/start' component={StartPage} />
        <Route path='/main' component={MainPage} />
        <Route path='/movie_play' component={MoviePlay} />
      </>
    )
  }


export default App;
