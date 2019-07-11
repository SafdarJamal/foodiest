import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

import Dashboard from './Dashboard';

export default () => {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.DASHBOARD} component={Dashboard} />
      </Switch>
    </Router>
  );
};
