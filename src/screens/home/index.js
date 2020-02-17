import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import pMinDelay from 'p-min-delay';

import Head from '../../components/Head';
import Home from '../../components/Home';
const NotFound = lazy(() =>
  pMinDelay(import('../../components/NotFound'), 1000)
);

const HomeScreen = () => {
  return (
    <>
      <Head title="Home" />
      <Switch>
        <Route path={ROUTES.HOME} component={Home} exact />
        <Route component={NotFound} />
      </Switch>
    </>
  );
};

export default HomeScreen;
