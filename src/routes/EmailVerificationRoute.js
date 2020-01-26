import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

const EmailVerificationRoute = ({ user, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      user ? (
        !user.isVerified ? (
          <Component {...props} />
        ) : (
          <Redirect to={ROUTES.LANDING} />
        )
      ) : (
        <Redirect to={ROUTES.LANDING} />
      )
    }
  />
);

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps)(EmailVerificationRoute);
