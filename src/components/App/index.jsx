import React, { Component } from 'react';
import firebase from '../../config/firebase';

import { ThemeProvider } from '@material-ui/styles';
import theme from '../../theme';

import Typography from '@material-ui/core/Typography';
import CustomButton from '../CustomButton';

class App extends Component {
  render() {
    console.log(firebase);

    return (
      <ThemeProvider theme={theme}>
        <Typography variant="h2">Hello World</Typography>
        <br />
        <CustomButton type="primary" />
        <CustomButton type="secondary" />
      </ThemeProvider>
    );
  }
}

export default App;
