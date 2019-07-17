import React, { Component } from 'react';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { Loading, SignIn as SignInAction } from '../../actions';
import { withFirebase } from '../../services/firebase';

import { ThemeProvider } from '@material-ui/styles';
import theme from '../../theme';

import { Switch, Route } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

// Initial Loading
import Loader from '../Loader';

// Private Routes
import RestaurateurRoute from '../../routes/private/RestaurateurRoute';
import FoodieRoute from '../../routes/private/FoodieRoute';

// Verification Route
import EmailVerificationRoute from '../../routes/verification/EmailVerificationRoute';

// Public Routes
import LandingRoute from '../../routes/public/LandingRoute';
import AccountTypeRoute from '../../routes/public/AccountTypeRoute';
import SignUpRestaurateurRoute from '../../routes/public/SignUpRestaurateurRoute';
import SignUpFoodieRoute from '../../routes/public/SignUpFoodieRoute';
import SignInRoute from '../../routes/public/SignInRoute';
import PasswordResetRoute from '../../routes/public/PasswordResetRoute';

class App extends Component {
  componentDidMount() {
    const { firebase, SignInAction, Loading } = this.props;
    // console.log(this.props);

    const unsubscribe = firebase.auth.onAuthStateChanged(user => {
      if (user) {
        unsubscribe();

        return firebase
          .getUser(user.uid)
          .then(querySnapshot => {
            // console.log(querySnapshot.data());

            const userData = querySnapshot.data();
            userData.uid = user.uid;
            userData.isVerified = user.emailVerified;

            SignInAction(userData);
          })
          .then(() => {
            Loading({ isLoading: false });
          })
          .catch(error => {
            const errorMessage = error.message;
            console.log(errorMessage);
          });
      } else {
        unsubscribe();

        this.props.Loading({ isLoading: false });
      }
    });
  }

  render() {
    const { isLoading, user } = this.props;

    console.log(user);

    if (isLoading) {
      return (
        <ThemeProvider theme={theme}>
          <Loader />;
        </ThemeProvider>
      );
    }

    return (
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path={ROUTES.LANDING} component={LandingRoute} />
          <Route path={ROUTES.DASHBOARD} component={RestaurateurRoute} />
          <Route path={ROUTES.HOME} component={FoodieRoute} />
          <Route path={ROUTES.ACCOUNT_TYPE} component={AccountTypeRoute} />
          <Route
            path={ROUTES.SIGNUP_RESTAURATEUR}
            component={SignUpRestaurateurRoute}
          />
          <Route path={ROUTES.SIGNUP_FOODIE} component={SignUpFoodieRoute} />
          <Route
            path={ROUTES.VERIFICATION}
            component={EmailVerificationRoute}
          />
          <Route exact path={ROUTES.SIGNIN} component={SignInRoute} />
          <Route path={ROUTES.PASSWORD_RESET} component={PasswordResetRoute} />
        </Switch>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = state => {
  return { isLoading: state.loading.isLoading, user: state.auth.user };
};

export default compose(
  connect(
    mapStateToProps,
    { Loading, SignInAction }
  ),
  withFirebase
)(App);
