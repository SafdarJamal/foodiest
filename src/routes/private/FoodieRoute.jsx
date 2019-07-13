import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

import Foodie from '../../screens/Foodie';

const FoodieRoute = props => {
  const { user } = props;

  if (user) {
    if (user.isVerified) {
      if (user.type === 'foodie') {
        return <Route component={Foodie} />;
      } else if (user.type === 'restaurateur') {
        return <Redirect to={ROUTES.DASHBOARD} />;
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

export default connect(mapStateToProps)(FoodieRoute);
