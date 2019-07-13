import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

import PasswordReset from '../../screens/Auth/PasswordReset';

const PasswordResetRoute = props => {
  const { user } = props;

  if (user) {
    if (user.type === 'restaurateur') {
      return <Redirect to={ROUTES.HOME} />;
    } else if (user.type === 'foodie') {
      return <Redirect to={ROUTES.DASHBOARD} />;
    }
  } else {
    return <Route component={PasswordReset} />;
  }
};

const mapStateToProps = state => {
  return { user: state.auth.user };
};

export default connect(mapStateToProps)(PasswordResetRoute);
