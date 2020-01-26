import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import * as USER_TYPES from '../constants/userTypes';
import * as ROUTES from '../constants/routes';

const PublicRoute = ({ user, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !user ? (
        <Component {...props} />
      ) : user.isVerified ? (
        user.type === USER_TYPES.RESTAURATEUR ? (
          <Redirect to={ROUTES.DASHBOARD} />
        ) : (
          <Redirect to={ROUTES.HOME} />
        )
      ) : (
        <Redirect to={ROUTES.EMAIL_VERIFICATION} />
      )
    }
  />
);

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps)(PublicRoute);
