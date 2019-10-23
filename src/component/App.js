import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../assets/css/reset.css';
import Home from './Home.js';
import Start from './Start.js';
import EmailJoin from './EmailJoin';



const App = () =>  {
    return (
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path='/start' component={Start} />
        <Route path='/emailjoin' component={EmailJoin}/>
      </Switch>
    )
  }


export default App;
