import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

import Restaurateur from '../../screens/Restaurateur';

const RestaurateurRoute = props => {
  const { user } = props;

  if (user) {
    if (user.isVerified) {
      if (user.type === 'restaurateur') {
        return <Route component={Restaurateur} />;
      } else if (user.type === 'foodie') {
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
