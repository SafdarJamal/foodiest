import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import * as USER_TYPES from '../../constants/userTypes';
import * as ROUTES from '../../constants/routes';

const PrivateRestaurateurRoute = ({ user, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      user && user.isVerified && user.type === USER_TYPES.RESTAURATEUR ? (
        <Component {...props} />
      ) : (
        <Redirect to={ROUTES.LANDING} />
      )
    }
  />
);

const mapStateToProps = state => {
  return { user: state.auth.user };
};

export default connect(mapStateToProps)(PrivateRestaurateurRoute);
