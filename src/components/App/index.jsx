import React, { Component } from 'react';

import { ThemeProvider } from '@material-ui/styles';
import theme from '../../theme';

import Header from '../Header';
// import Landing from '../Landing';
// import SignIn from '../SignIn';
import SignUp from '../SignUp';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Header />
        {/* <Landing /> */}
        {/* <SignIn /> */}
        <SignUp />
      </ThemeProvider>
    );
  }
}

export default App;
