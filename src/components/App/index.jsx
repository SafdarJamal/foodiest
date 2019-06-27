import React, { Component } from 'react';

import { ThemeProvider } from '@material-ui/styles';
import theme from '../../theme';

import Header from '../Header';
import Landing from '../Landing';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Header />
        <Landing />
      </ThemeProvider>
    );
  }
}

export default App;
