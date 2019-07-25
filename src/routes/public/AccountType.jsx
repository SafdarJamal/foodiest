import React, { lazy } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import * as USER_TYPES from '../../constants/userTypes';
import pMinDelay from 'p-min-delay';

const AccountType = lazy(() =>
  pMinDelay(import('../../screens/Auth/AccountType'), 1000)
);

const AccountTypeRoute = ({ user }) => {
  if (user) {
    if (user.isVerified) {
      if (user.type === USER_TYPES.RESTAURATEUR) {
        return <Redirect to={ROUTES.DASHBOARD} />;
      } else if (user.type === USER_TYPES.FOODIE) {
        return <Redirect to={ROUTES.HOME} />;
      }
    } else {
      return <Route component={AccountType} />;
    }
  } else {
    return <Route component={AccountType} />;
  }
};

const mapStateToProps = state => {
  return { user: state.auth.user };
};

export default connect(mapStateToProps)(AccountTypeRoute);
