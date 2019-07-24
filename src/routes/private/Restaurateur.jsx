import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import * as USER_TYPES from '../../constants/userTypes';

import Restaurateur from '../../screens/Restaurateur';

const RestaurateurRoute = ({ user }) => {
  if (user) {
    if (user.isVerified) {
      if (user.type === USER_TYPES.RESTAURATEUR) {
        return <Route component={Restaurateur} />;
      } else if (user.type === USER_TYPES.FOODIE) {
        return <Redirect to={ROUTES.HOME} />;
      }
    } else {
      return <Redirect to={ROUTES.VERIFICATION} />;
    }
  } else {
    return <Redirect to={ROUTES.SIGNIN} />;
  }
};

const mapStateToProps = state => {
  return { user: state.auth.user };
};

export default connect(mapStateToProps)(RestaurateurRoute);
