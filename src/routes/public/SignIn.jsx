import React, { lazy } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import * as USER_TYPES from '../../constants/userTypes';
import pMinDelay from 'p-min-delay';

const SignIn = lazy(() => pMinDelay(import('../../screens/Auth/SignIn'), 1000));

const SignInRoute = ({ user }) => {
  if (user) {
    if (user.isVerified) {
      switch (user.type) {
        case USER_TYPES.RESTAURATEUR:
          return <Redirect to={ROUTES.DASHBOARD} />;
        case USER_TYPES.FOODIE:
          return <Redirect to={ROUTES.HOME} />;
        default:
      }
    } else {
      return <Redirect to={ROUTES.VERIFICATION} />;
    }
  } else {
    return <Route component={SignIn} />;
  }
};

const mapStateToProps = state => {
  return { user: state.auth.user };
};

export default connect(mapStateToProps)(SignInRoute);
