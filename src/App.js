import React from 'react';
import { Route } from 'react-router-dom';
// import './assets/css/reset.css';
import HomePage from './page/HomePage.js';
import StartPage from './page/StartPage.js';
import SignUpPage from './page/SignUpPage';
import SignInPage from './page/SignInPage';
import FindPassPage from './page/FindPassPage';




const App = () =>  {
    return (
      <>
        <Route path='/' component={HomePage} exact={true} />
        <Route path='/start' component={StartPage} />
        <Route path='/sign_up' component={SignUpPage}/>
        <Route path='/sign_in' component={SignInPage}/>
        <Route path='/find_password' component={FindPassPage} />
      </>
    )
  }


export default App;
