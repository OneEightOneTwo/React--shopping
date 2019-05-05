import React from 'react';
import { Router, Route, Switch,Redirect,} from 'dva/router';
// import {Redirect} from 'react-router-dom';

import Goodslist from './routes/Goodlist/Goodslist';
import Details from './routes/Details/Details';
import Header from './components/Header/Header'

// import IndexPage from './routes/IndexPage';
import HomePage from './routes/HomePage/HomePage'
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        
        <Route path="/good" exact component={Goodslist} />
        <Route path="/deta" exact component={Details} />
         <Route path="/head" exact component={Header} />
        
        {/* <Route path="/" exact component={IndexPage} /> */}
        <Route path="/home" exact component={HomePage} />
        <Redirect from="/" to="/good" />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
