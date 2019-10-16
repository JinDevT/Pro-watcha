import React from 'react';
import { Route } from 'react-router-dom';
import './assets/css/reset.css';
import Home from './component/Home.js';
import Start from './component/Start.js';



const App = () =>  {
    return (
      <div>
        <Route path="/" component={Home} exact={true} />
        <Route path='/start' component={Start} />
      </div>
    )
  }


export default App;
