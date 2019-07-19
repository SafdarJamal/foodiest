import React, { Component } from 'react';
import { Suspense, lazy } from 'react';

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
const RestaurateurRoute = lazy(() =>
  import('../../routes/private/RestaurateurRoute')
);
const FoodieRoute = lazy(() => import('../../routes/private/FoodieRoute'));

// Verification Route
const EmailVerificationRoute = lazy(() =>
  import('../../routes/verification/EmailVerificationRoute')
);

// Public Routes
const LandingRoute = lazy(() => import('../../routes/public/LandingRoute'));
const AccountTypeRoute = lazy(() =>
  import('../../routes/public/AccountTypeRoute')
);
const SignUpRestaurateurRoute = lazy(() =>
  import('../../routes/public/SignUpRestaurateurRoute')
);
const SignUpFoodieRoute = lazy(() =>
  import('../../routes/public/SignUpFoodieRoute')
);
const SignInRoute = lazy(() => import('../../routes/public/SignInRoute'));
const PasswordResetRoute = lazy(() =>
  import('../../routes/public/PasswordResetRoute')
);

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
        <Suspense
          fallback={
            <div>
              <Loader />
            </div>
          }
        >
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
            <Route
              path={ROUTES.PASSWORD_RESET}
              component={PasswordResetRoute}
            />
          </Switch>
        </Suspense>
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
