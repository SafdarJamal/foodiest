import React, { Component, Suspense, lazy } from 'react';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { Loading, SignIn as SignInAction } from '../../actions';
import { withFirebase } from '../../services/firebase';

import { ThemeProvider } from '@material-ui/styles';
import theme from '../../theme';

import { Switch, Route } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './index.css';

// Initial loading
import Loader from '../Loader';
import EllipsisSpinner from '../UI/EllipsisSpinner';

// Routes handling
const Landing = lazy(() => import('../../routes/public/Landing'));
const Restaurateur = lazy(() => import('../../routes/private/Restaurateur'));
const Foodie = lazy(() => import('../../routes/private/Foodie'));
const AccountType = lazy(() => import('../../routes/public/AccountType'));
const SignUpRestaurateur = lazy(() =>
  import('../../routes/public/SignUpRestaurateur')
);
const SignUpFoodie = lazy(() => import('../../routes/public/SignUpFoodie'));
const EmailVerification = lazy(() =>
  import('../../routes/verification/EmailVerification')
);
const SignIn = lazy(() => import('../../routes/public/SignIn'));
const PasswordReset = lazy(() => import('../../routes/public/PasswordReset'));

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
            <div style={{ textAlign: 'center', paddingTop: '25%' }}>
              <EllipsisSpinner />
            </div>
          }
        >
          <Route
            render={({ location }) => {
              return (
                <TransitionGroup>
                  <CSSTransition
                    key={location.key}
                    timeout={150}
                    classNames="fade"
                    appear={true}
                  >
                    <Switch location={location}>
                      <Route exact path={ROUTES.LANDING} component={Landing} />
                      <Route path={ROUTES.DASHBOARD} component={Restaurateur} />
                      <Route path={ROUTES.HOME} component={Foodie} />
                      <Route
                        path={ROUTES.ACCOUNT_TYPE}
                        component={AccountType}
                      />
                      <Route
                        path={ROUTES.SIGNUP_RESTAURATEUR}
                        component={SignUpRestaurateur}
                      />
                      <Route
                        path={ROUTES.SIGNUP_FOODIE}
                        component={SignUpFoodie}
                      />
                      <Route
                        path={ROUTES.VERIFICATION}
                        component={EmailVerification}
                      />
                      <Route exact path={ROUTES.SIGNIN} component={SignIn} />
                      <Route
                        path={ROUTES.PASSWORD_RESET}
                        component={PasswordReset}
                      />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              );
            }}
          />
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
