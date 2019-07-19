import React from 'react';

import { Switch, Route } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

import Home from './Home';

export default () => {
  return (
    <Switch>
      <Route exact path={ROUTES.HOME} component={Home} />
    </Switch>
  );
};
