import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Admin from './routes/Admin/Admin';

function RouterConfig({ history, app }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/admin" render={props => <Admin {...props} app={app} />} />
        <Route path="/" render={props => <IndexPage {...props} app={app} />} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
