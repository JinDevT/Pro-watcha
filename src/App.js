import React from 'react';
import { Route } from 'react-router-dom';
import './assets/css/reset.css';
import HomePage from './page/HomePage.js';
import StartPage from './page/StartPage.js';
import SignUpPage from './page/SignUpPage';
//import SignInPage from './page/SignInPage';
import MainPage from './page/MainPage.js';





const App = () =>  {
    return (
      <>
        <Route path='/' component={HomePage} exact={true} />
        <Route path='/start' component={StartPage} />
        <Route path='/sign_up' component={SignUpPage}/>
        {/* <Route path='/sign_in' component={MainPage}/>  임시로 페이지 확인할려고 이렇게 지정함 . 원래는 SignInpage */}
        <Route path='/main' component={MainPage} />
      </>
    )
  }


export default App;
