import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

import { ThemeProvider } from '@material-ui/styles';
import theme from '../../theme';

import Header from '../Header';
import LandingPage from '../Landing';
import AccountType from '../SignUp/AccountType';
import SignUpRestaurateur from '../SignUp/Restaurateur';
import SignUpFoodie from '../SignUp/Foodie';
import EmailVerification from '../EmailVerification';
import SignIn from '../SignIn';
import PasswordReset from '../PasswordReset';
import Home from '../Home';

class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <Header isLanding={true} />
          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route path={ROUTES.ACCOUNT_TYPE} component={AccountType} />
          <Route
            path={ROUTES.SIGNUP_RESTAURATEUR}
            component={SignUpRestaurateur}
          />
          <Route path={ROUTES.SIGNUP_FOODIE} component={SignUpFoodie} />
          <Route path={ROUTES.VERIFICATION} component={EmailVerification} />
          <Route path={ROUTES.SIGNIN} component={SignIn} />
          <Route path={ROUTES.PASSWORD_RESET} component={PasswordReset} />
          <Route path={ROUTES.HOME} component={Home} />
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
