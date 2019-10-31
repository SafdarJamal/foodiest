import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const VerificationRoute = ({ user, component: Component, ...rest }) => (
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
        <Redirect to={ROUTES.SIGNIN} />
      )
    }
  />
);

const mapStateToProps = state => {
  return { user: state.auth.user };
};

export default connect(mapStateToProps)(VerificationRoute);
