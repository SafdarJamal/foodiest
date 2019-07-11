import React, { Component } from 'react';

import { compose } from 'redux';
import { connect } from 'react-redux';

import { ThemeProvider } from '@material-ui/styles';
import theme from '../../theme';

import { Switch, Route } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

import { withFirebase } from '../../services/firebase';

// Landing Screen
import Landing from '../../screens/Landing/Landing';

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
import { Loading } from '../../actions';

import PrivateRoute from '../PrivateRoute';
class App extends Component {
  componentDidMount() {
    this.props.firebase.auth.onAuthStateChanged(user => {
      if (user) {
        console.log(this.props);
        this.props.Loading();
      }
    });
  }

  render() {
    const { isLoading } = this.props;

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
          <PrivateRoute
            path={ROUTES.HOME}
            component={Foodie}
            firebase={this.props.firebase}
          />
          <Route exact path={ROUTES.LANDING} component={Landing} />
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
  return { isLoading: state.loading.isLoading };
};

export default compose(
  connect(
    mapStateToProps,
    { Loading }
  ),
  withFirebase
)(App);
