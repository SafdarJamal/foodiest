import React, { Component } from 'react';

import { ThemeProvider } from '@material-ui/styles';
import theme from '../../theme';

import Typography from '@material-ui/core/Typography';

import Header from '../Header';
import CustomButton from '../CustomButton';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Header />
        <br />
        <Typography style={{ marginTop: 60 }} variant="h2">
          Hello World
        </Typography>
        <br />
        <CustomButton type="primary" variant="outlined" />
        <CustomButton type="secondary" />
      </ThemeProvider>
    );
  }
}

export default App;
