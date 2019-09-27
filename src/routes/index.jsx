import React, { lazy } from 'react';

import { Switch, Route } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

// Routes handling
const Landing = lazy(() => import('./public/Landing'));
const Restaurateur = lazy(() => import('./private/Restaurateur'));
const Foodie = lazy(() => import('./private/Foodie'));
const SignUpType = lazy(() => import('./public/SignUpType'));
const SignUpRestaurateur = lazy(() => import('./public/SignUpRestaurateur'));
const SignUpFoodie = lazy(() => import('./public/SignUpFoodie'));
const EmailVerification = lazy(() =>
  import('./verification/EmailVerification')
);
const SignIn = lazy(() => import('./public/SignIn'));
const PasswordReset = lazy(() => import('./public/PasswordReset'));
const NotFound = lazy(() => import('../components/NotFound'));

const Routes = () => {
  return (
    <Switch>
      <Route path={ROUTES.LANDING} component={Landing} exact />
      <Route path={ROUTES.DASHBOARD} component={Restaurateur} />
      <Route path={ROUTES.HOME} component={Foodie} />
      <Route path={ROUTES.SIGNUP} component={SignUpType} exact />
      <Route path={ROUTES.SIGNUP_RESTAURATEUR} component={SignUpRestaurateur} />
      <Route path={ROUTES.SIGNUP_FOODIE} component={SignUpFoodie} />
      <Route path={ROUTES.VERIFICATION} component={EmailVerification} />
      <Route path={ROUTES.SIGNIN} component={SignIn} exact />
      <Route path={ROUTES.PASSWORD_RESET} component={PasswordReset} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
