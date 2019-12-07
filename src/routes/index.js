import React, { lazy } from 'react';
import { Switch } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import pMinDelay from 'p-min-delay';

import RestaurateurRoute from './RestaurateurRoute';
import FoodieRoute from './FoodieRoute';
import PublicRoute from './PublicRoute';
import VerificationRoute from './VerificationRoute';

const DashboardScreen = lazy(() =>
  pMinDelay(import('../screens/dashboard'), 1000)
);
const HomeScreen = lazy(() => pMinDelay(import('../screens/home'), 1000));
const LandingScreen = lazy(() => pMinDelay(import('../screens/index'), 1000));
const SignUpScreen = lazy(() => pMinDelay(import('../screens/signup'), 1000));
const SignUpRestaurateurScreen = lazy(() =>
  pMinDelay(import('../screens/signup/restaurateur'), 1000)
);
const SignUpFoodieScreen = lazy(() =>
  pMinDelay(import('../screens/signup/foodie'), 1000)
);
const VerificationScreen = lazy(() =>
  pMinDelay(import('../screens/verification'), 1000)
);
const SignInScreen = lazy(() => pMinDelay(import('../screens/signin'), 1000));
const PasswordResetScreen = lazy(() =>
  pMinDelay(import('../screens/signin/password-reset'), 1000)
);
const NotFoundScreen = lazy(() => pMinDelay(import('../screens/404'), 1000));

const Routes = () => {
  return (
    <Switch>
      <RestaurateurRoute path={ROUTES.DASHBOARD} component={DashboardScreen} />
      <FoodieRoute path={ROUTES.HOME} component={HomeScreen} />
      <PublicRoute path={ROUTES.LANDING} component={LandingScreen} exact />
      <PublicRoute path={ROUTES.SIGNUP} component={SignUpScreen} exact />
      <PublicRoute
        path={ROUTES.SIGNUP_RESTAURATEUR}
        component={SignUpRestaurateurScreen}
      />
      <PublicRoute path={ROUTES.SIGNUP_FOODIE} component={SignUpFoodieScreen} />
      <VerificationRoute
        path={ROUTES.VERIFICATION}
        component={VerificationScreen}
      />
      <PublicRoute path={ROUTES.SIGNIN} component={SignInScreen} exact />
      <PublicRoute
        path={ROUTES.PASSWORD_RESET}
        component={PasswordResetScreen}
      />
      <PublicRoute component={NotFoundScreen} />
    </Switch>
  );
};

export default Routes;