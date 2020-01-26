import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import pMinDelay from 'p-min-delay';

import Head from '../../components/Head';
import Dashboard from '../../components/Dashboard';
const NotFound = lazy(() =>
  pMinDelay(import('../../components/NotFound'), 1000)
);

const DashboardScreen = () => {
  return (
    <>
      <Head title="Dashboard" />
      <Switch>
        <Route path={ROUTES.DASHBOARD} component={Dashboard} exact />
        <Route component={NotFound} />
      </Switch>
    </>
  );
};

export default DashboardScreen;
