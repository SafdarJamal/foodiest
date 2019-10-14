import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import * as USER_TYPES from '../../constants/userTypes';
import * as ROUTES from '../../constants/routes';

const PrivateFoodieRoute = ({ user, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      user && user.isVerified && user.type === USER_TYPES.FOODIE ? (
        <Component {...props} />
      ) : (
        <Redirect to={ROUTES.SIGNIN} />
      )
    }
  />
);

const mapStateToProps = state => {
  return { user: state.auth.user };
};

export default connect(mapStateToProps)(PrivateFoodieRoute);
