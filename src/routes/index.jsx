import React, { lazy } from 'react';
import { Switch } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import pMinDelay from 'p-min-delay';

import PrivateRestaurateur from './private/Restaurateur';
import PrivateFoodie from './private/Foodie';
import Public from './public/Public';

const Landing = lazy(() =>
  pMinDelay(import('../screens/Landing/Landing'), 1000)
);
const Restaurateur = lazy(() =>
  pMinDelay(import('../screens/Restaurateur/Dashboard'), 1000)
);
const Foodie = lazy(() => pMinDelay(import('../screens/Foodie/Home'), 1000));
const SignUpType = lazy(() =>
  pMinDelay(import('../screens/Auth/SignUpType'), 1000)
);
const SignUp = lazy(() => pMinDelay(import('../screens/Auth/SignUp'), 1000));
const EmailVerification = lazy(() =>
  pMinDelay(import('../screens/Auth/EmailVerification'), 1000)
);
const SignIn = lazy(() => pMinDelay(import('../screens/Auth/SignIn'), 1000));
const PasswordReset = lazy(() =>
  pMinDelay(import('../screens/Auth/PasswordReset'), 1000)
);
const NotFound = lazy(() => pMinDelay(import('../components/NotFound'), 1000));

const Routes = () => {
  return (
    <Switch>
      <Public path={ROUTES.LANDING} component={Landing} exact />
      <PrivateRestaurateur path={ROUTES.DASHBOARD} component={Restaurateur} />
      <PrivateFoodie path={ROUTES.HOME} component={Foodie} />
      <Public path={ROUTES.SIGNUP} component={SignUpType} exact />
      <Public path={ROUTES.SIGNUP_RESTAURATEUR} component={SignUp} />
      <Public path={ROUTES.SIGNUP_FOODIE} component={SignUp} />
      <Public path={ROUTES.VERIFICATION} component={EmailVerification} />
      <Public path={ROUTES.SIGNIN} component={SignIn} exact />
      <Public path={ROUTES.PASSWORD_RESET} component={PasswordReset} />
      <Public component={NotFound} />
    </Switch>
  );
};

export default Routes;
