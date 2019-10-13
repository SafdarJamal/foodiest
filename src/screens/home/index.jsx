import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import pMinDelay from 'p-min-delay';

import Home from '../../components/Foodie/Home';
const NotFound = lazy(() =>
  pMinDelay(import('../../components/NotFound'), 1000)
);

const HomeScreen = () => {
  return (
    <Switch>
      <Route path={ROUTES.HOME} component={Home} exact />
      <Route component={NotFound} />
    </Switch>
  );
};

export default HomeScreen;
