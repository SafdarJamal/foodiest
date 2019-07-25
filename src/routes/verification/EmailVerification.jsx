import React, { lazy } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import pMinDelay from 'p-min-delay';

const EmailVerification = lazy(() =>
  pMinDelay(import('../../screens/Auth/EmailVerification'), 1000)
);

const EmailVerificationRoute = ({ user }) => {
  if (user) {
    if (!user.isVerified) {
      return <Route component={EmailVerification} />;
    } else {
      return <Redirect to={ROUTES.LANDING} />;
    }
  } else {
    return <Redirect to={ROUTES.LANDING} />;
  }
};

const mapStateToProps = state => {
  return { user: state.auth.user };
};

export default connect(mapStateToProps)(EmailVerificationRoute);
