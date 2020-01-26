import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import * as USER_TYPES from '../constants/userTypes';
import * as ROUTES from '../constants/routes';

const RestaurateurRoute = ({ user, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      user ? (
        user.isVerified ? (
          user.type === USER_TYPES.RESTAURATEUR ? (
            <Component {...props} />
          ) : (
            <Redirect to={ROUTES.HOME} />
          )
        ) : (
          <Redirect to={ROUTES.EMAIL_VERIFICATION} />
        )
      ) : (
        <Redirect to={ROUTES.SIGNIN} />
      )
    }
  />
);

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps)(RestaurateurRoute);
