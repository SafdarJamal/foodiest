import React, { Component } from 'react';

import { ThemeProvider } from '@material-ui/styles';
import theme from '../../theme';

import Header from '../Header';
import Landing from '../Landing';

import { withFirebase } from '../../firebase';

class App extends Component {
  render() {
    console.log(this.props.firebase);

    return (
      <ThemeProvider theme={theme}>
        <Header />
        <Landing />
      </ThemeProvider>
    );
  }
}

export default App;
