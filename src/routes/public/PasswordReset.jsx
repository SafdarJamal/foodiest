import React, { lazy } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import pMinDelay from 'p-min-delay';

const PasswordReset = lazy(() =>
  pMinDelay(import('../../screens/Auth/PasswordReset'), 1000)
);

const PasswordResetRoute = ({ user }) => {
  if (!user) {
    return <Route component={PasswordReset} />;
  } else {
    return <Redirect to={ROUTES.LANDING} />;
  }
};

const mapStateToProps = state => {
  return { user: state.auth.user };
};

export default connect(mapStateToProps)(PasswordResetRoute);
