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

import pMinDelay from 'p-min-delay';

// Initial loading
import Loader from '../Loader';

// Route handlers
const Landing = lazy(() => import('../../routes/public/Landing'));
const Restaurateur = lazy(() =>
  pMinDelay(import('../../routes/private/Restaurateur'), 3000)
);
const Foodie = lazy(() =>
  pMinDelay(import('../../routes/private/Foodie'), 3000)
);
const AccountType = lazy(() =>
  pMinDelay(import('../../routes/public/AccountType'), 2000)
);
const SignUpRestaurateur = lazy(() =>
  pMinDelay(import('../../routes/public/SignUpRestaurateur'), 2000)
);
const SignUpFoodie = lazy(() =>
  pMinDelay(import('../../routes/public/SignUpFoodie'), 2000)
);
const EmailVerification = lazy(() =>
  pMinDelay(import('../../routes/verification/EmailVerification'), 2000)
);
const SignIn = lazy(() =>
  pMinDelay(import('../../routes/public/SignIn'), 2000)
);
const PasswordReset = lazy(() =>
  pMinDelay(import('../../routes/public/PasswordReset'), 2000)
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
            <Route exact path={ROUTES.LANDING} component={Landing} />
            <Route path={ROUTES.DASHBOARD} component={Restaurateur} />
            <Route path={ROUTES.HOME} component={Foodie} />
            <Route path={ROUTES.ACCOUNT_TYPE} component={AccountType} />
            <Route
              path={ROUTES.SIGNUP_RESTAURATEUR}
              component={SignUpRestaurateur}
            />
            <Route path={ROUTES.SIGNUP_FOODIE} component={SignUpFoodie} />
            <Route path={ROUTES.VERIFICATION} component={EmailVerification} />
            <Route exact path={ROUTES.SIGNIN} component={SignIn} />
            <Route path={ROUTES.PASSWORD_RESET} component={PasswordReset} />
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
