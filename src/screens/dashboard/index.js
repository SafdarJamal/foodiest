import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import pMinDelay from 'p-min-delay';

import Dashboard from '../../components/Dashboard';
const NotFound = lazy(() =>
  pMinDelay(import('../../components/NotFound'), 1000)
);

const DashboardScreen = () => {
  return (
    <Switch>
      <Route path={ROUTES.DASHBOARD} component={Dashboard} exact />
      <Route component={NotFound} />
    </Switch>
  );
};

export default DashboardScreen;
