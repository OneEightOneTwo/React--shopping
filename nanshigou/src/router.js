import React from 'react';
import { Router, Route, Switch,Redirect,} from 'dva/router';


import Goodslist from './routes/Goodlist/Goodslist';
import Details from './routes/Details/Details';



import HomePage from './routes/HomePage/HomePage'
import Login from './routes/Login/Login'
import Reg from './routes/Reg/Reg'
import ShoppingCar from './components/ShoppingCar/ShoppingCar'
import Header from './components/Header/Header'
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>

        <Route path="/good" exact component={Goodslist} />
        <Route path="/deta" exact component={Details} />
        <Route path="/head" exact component={Header} />
        <Route path="/home" exact component={HomePage} />

        {/* <Route path="/" exact component={IndexPage} /> */}
        <Route path="/login" exact component={Login} />
        <Route path="/reg" exact component={Reg} />
        <Route path="/shop" exact component={ShoppingCar} />
        <Redirect  from="/" exact to="/home" />

      </Switch>
    </Router>
  );
}

export default RouterConfig;
