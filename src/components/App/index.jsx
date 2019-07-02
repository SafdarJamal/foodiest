import React, { Component } from 'react';

import { ThemeProvider } from '@material-ui/styles';
import theme from '../../theme';

import Header from '../Header';
// import Landing from '../Landing';
import SignIn from '../SignIn';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Header />
        {/* <Landing /> */}
        <div style={{ marginTop: 100 }}>
          <SignIn />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
