import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

import EmailVerification from '../../screens/Auth/EmailVerification';

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
