import React, { lazy } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import pMinDelay from 'p-min-delay';

const SignUp = lazy(() => pMinDelay(import('../../screens/Auth/SignUp'), 1000));

const SignUpFoodieRoute = ({ user }) => {
  if (!user) {
    return <Route component={SignUp} />;
  } else {
    return <Redirect to={ROUTES.LANDING} />;
  }
};

const mapStateToProps = state => {
  return { user: state.auth.user };
};

export default connect(mapStateToProps)(SignUpFoodieRoute);