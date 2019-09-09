import React, { lazy } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import pMinDelay from 'p-min-delay';

const SignIn = lazy(() => pMinDelay(import('../../screens/Auth/SignIn'), 1000));

const SignInRoute = ({ user }) => {
  if (!user) {
    return <Route component={SignIn} />;
  } else {
    return <Redirect to={ROUTES.LANDING} />;
  }
};

const mapStateToProps = state => {
  return { user: state.auth.user };
};

export default connect(mapStateToProps)(SignInRoute);
