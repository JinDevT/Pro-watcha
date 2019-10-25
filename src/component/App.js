import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../assets/css/reset.css';
import Home from './Home.js';
import Start from './Start.js';
import Sign_up from './Sign_up';
import Sign_in from './Sign_in';
import Find_password from './Find_password';




const App = () =>  {
    return (
      <Switch>
        <Route path='/' component={Home} exact={true} />
        <Route path='/start' component={Start} />
        <Route path='/sign_up' component={Sign_up}/>
        <Route path='/sign_in' component={Sign_in}/>
        <Route path='/find_password' component={Find_password} />
      </Switch>
    )
  }


export default App;
