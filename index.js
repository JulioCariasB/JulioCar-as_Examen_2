import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Home from './Home';
import Weather from './Weather';
import {Route, Link,  BrowserRouter as Router, Switch} from 'react-router-dom';


import * as serviceWorker from './serviceWorker';
const routing = (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path= "'/weather/:month/:day" component={Weather}/>
      </Switch>
    </Router>
  );

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
