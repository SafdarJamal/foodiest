import React from 'react';

import { Switch, Route } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

import Dashboard from './Dashboard';

export default () => {
  return (
    <Switch>
      <Route exact path={ROUTES.DASHBOARD} component={Dashboard} />
    </Switch>
  );
};
