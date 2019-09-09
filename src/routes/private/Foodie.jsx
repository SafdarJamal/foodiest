import React, { lazy } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import * as USER_TYPES from '../../constants/userTypes';
import pMinDelay from 'p-min-delay';

const Home = lazy(() => pMinDelay(import('../../screens/Foodie/Home'), 2000));
const NotFound = lazy(() => import('../../components/NotFound'));

const FoodieRoute = ({ user }) => {
  if (user) {
    if (user.isVerified) {
      switch (user.type) {
        case USER_TYPES.FOODIE:
          return (
            <Switch>
              <Route path={ROUTES.HOME} component={Home} exact />
              <Route component={NotFound} />
            </Switch>
          );
        case USER_TYPES.RESTAURATEUR:
          return <Redirect to={ROUTES.DASHBOARD} />;
        default:
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
