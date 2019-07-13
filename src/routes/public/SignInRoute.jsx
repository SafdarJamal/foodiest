import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

import SignIn from '../../screens/Auth/SignIn';

const SignInRoute = props => {
  const { user } = props;

  if (user) {
    if (user.type === 'restaurateur') {
      return <Redirect to={ROUTES.HOME} />;
    } else if (user.type === 'foodie') {
      return <Redirect to={ROUTES.DASHBOARD} />;
    }
  } else {
    return <Route component={SignIn} />;
  }
};

const mapStateToProps = state => {
  return { user: state.auth.user };
};

export default connect(mapStateToProps)(SignInRoute);
