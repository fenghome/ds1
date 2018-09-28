import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';

function RouterConfig({ history, app }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" render={props => (
          <IndexPage {...props} app={app} />
        )} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
