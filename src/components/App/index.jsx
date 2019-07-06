import React, { Component } from 'react';

import { ThemeProvider } from '@material-ui/styles';
import theme from '../../theme';

import Header from '../Header';
import Landing from '../Landing';
// import AccountType from '../AccountType';
// import SignUp from '../SignUp';
// import SignIn from '../SignIn';
// import EmailVerification from '../EmailVerification';
// import PasswordReset from '../PasswordReset';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Header />
        <Landing />
        {/* <AccountType /> */}
        {/* <SignUp /> */}
        {/* <SignIn /> */}
        {/* <EmailVerification /> */}
        {/* <PasswordReset /> */}
      </ThemeProvider>
    );
  }
}

export default App;
