import React, { lazy } from 'react';
import { Switch } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import pMinDelay from 'p-min-delay';

import { PrivateRestaurateur } from './private';
import { PrivateFoodie } from './private';
import { Public } from './public';

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
      <PrivateRestaurateur
        path={ROUTES.DASHBOARD}
        component={DashboardScreen}
      />
      <PrivateFoodie path={ROUTES.HOME} component={HomeScreen} />
      <Public path={ROUTES.LANDING} component={LandingScreen} exact />
      <Public path={ROUTES.SIGNUP} component={SignUpScreen} exact />
      <Public
        path={ROUTES.SIGNUP_RESTAURATEUR}
        component={SignUpRestaurateurScreen}
      />
      <Public path={ROUTES.SIGNUP_FOODIE} component={SignUpFoodieScreen} />
      <Public path={ROUTES.VERIFICATION} component={VerificationScreen} />
      <Public path={ROUTES.SIGNIN} component={SignInScreen} exact />
      <Public path={ROUTES.PASSWORD_RESET} component={PasswordResetScreen} />
      <Public component={NotFoundScreen} />
    </Switch>
  );
};

export default Routes;
