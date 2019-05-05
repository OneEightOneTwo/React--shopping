import React from 'react';
import { Router, Route, Switch } from 'dva/router';


import Goodslist from './routes/Goodlist/Goodslist';
import Details from './routes/Details/Details';


import IndexPage from './routes/IndexPage';
import HomePage from './routes/HomePage/HomePage'
import ShoppingCar from './components/ShoppingCar/ShoppingCar'
import Header from './components/Header/Header'
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        
        <Route path="/good" exact component={Goodslist} />
        <Route path="/deta" exact component={Details} />
      
        
        <Route path="/" exact component={IndexPage} />
        <Route path="/home" exact component={HomePage} />
        <Route path="/shop" exact component={ShoppingCar} />
        <Route path="/head" exact component={Header} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
