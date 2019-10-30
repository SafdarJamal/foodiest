import React, { lazy } from 'react';
import { Switch } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import pMinDelay from 'p-min-delay';

import { RestaurateurRoute, FoodieRoute } from './private';
import PublicRoute from './public';
import VerificationRoute from './verification';

const DashboardScreen = lazy(() =>
  pMinDelay(import('../screens/dashboard/DashboardScreen'), 1000)
);
const HomeScreen = lazy(() =>
  pMinDelay(import('../screens/home/HomeScreen'), 1000)
);
const LandingScreen = lazy(() =>
  pMinDelay(import('../screens/LandingScreen'), 1000)
);
const SignUpScreen = lazy(() =>
  pMinDelay(import('../screens/signup/SignUpScreen'), 1000)
);
const SignUpRestaurateurScreen = lazy(() =>
  pMinDelay(
    import('../screens/signup/restaurateur/SignUpRestaurateurScreen'),
    1000
  )
);
const SignUpFoodieScreen = lazy(() =>
  pMinDelay(import('../screens/signup/foodie/SignUpFoodieScreen'), 1000)
);
const VerificationScreen = lazy(() =>
  pMinDelay(import('../screens/verification/VerificationScreen'), 1000)
);
const SignInScreen = lazy(() =>
  pMinDelay(import('../screens/signin/SignInScreen'), 1000)
);
const PasswordResetScreen = lazy(() =>
  pMinDelay(
    import('../screens/signin/password-reset/PasswordResetScreen'),
    1000
  )
);
const NotFoundScreen = lazy(() =>
  pMinDelay(import('../screens/NotFoundScreen'), 1000)
);

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
