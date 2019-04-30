import React from 'react';
import { Router, Route, Switch } from 'dva/router';


import Goodslist from './routes/Goodlist/Goodslist';
import Details from './routes/Details/Details';


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        
        <Route path="/good" exact component={Goodslist} />
        <Route path="/deta" exact component={Details} />
      
        
      </Switch>
    </Router>
  );
}

export default RouterConfig;
