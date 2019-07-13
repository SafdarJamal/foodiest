import React, { Component } from 'react';

import { compose } from 'redux';
import { connect } from 'react-redux';

import { ThemeProvider } from '@material-ui/styles';
import theme from '../../theme';

import { Switch, Route } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

import { withFirebase } from '../../services/firebase';

// Landing Screen
// import Landing from '../../screens/Landing/Landing';

// Auth Screens
import AccountType from '../../screens/Auth/AccountType';
import SignUpRestaurateur from '../../screens/Auth/SignUpRestaurateur';
import SignUpFoodie from '../../screens/Auth/SignUpFoodie';
import EmailVerification from '../../screens/Auth/EmailVerification';
import SignIn from '../../screens/Auth/SignIn';
import PasswordReset from '../../screens/Auth/PasswordReset';

// Restaurateur Screen
import Restaurateur from '../../screens/Restaurateur';

// Foodie Screen
import Foodie from '../../screens/Foodie';

// Initial Loading
import Loader from '../Loader';
import { Loading, SignIn as SignInAction } from '../../actions';

import LandingRoute from '../../routes/public/LandingRoute';

class App extends Component {
  componentDidMount() {
    this.props.firebase.auth.onAuthStateChanged(user => {
      if (user) {
        // console.log(this.props);
        this.props.SignInAction({
          email: user.email,
          uid: user.uid,
          type: 'restaurateur',
          isVerified: false
        });
        this.props.Loading({ isLoading: false });
      } else {
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
          {/* <PrivateRoute exact path={ROUTES.LANDING} component={PrivateRoute} /> */}
          <Route exact path={ROUTES.LANDING} component={LandingRoute} />
          <Route path={ROUTES.ACCOUNT_TYPE} component={AccountType} />
          <Route
            path={ROUTES.SIGNUP_RESTAURATEUR}
            component={SignUpRestaurateur}
          />
          <Route path={ROUTES.SIGNUP_FOODIE} component={SignUpFoodie} />
          <Route path={ROUTES.VERIFICATION} component={EmailVerification} />
          <Route exact path={ROUTES.SIGNIN} component={SignIn} />
          <Route path={ROUTES.PASSWORD_RESET} component={PasswordReset} />
          <Route path={ROUTES.DASHBOARD} component={Restaurateur} />
          <Route path={ROUTES.HOME} component={Foodie} />
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
