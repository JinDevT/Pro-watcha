import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './assets/css/reset.css';
import Home from './component/Home.js';
import Start from './component/Start.js';
import EmailJoin from './component/EmailJoin';



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
