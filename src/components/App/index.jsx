import React, { Component } from 'react';

import { ThemeProvider } from '@material-ui/styles';
import theme from '../../theme';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Header from '../Header';
import CustomButton from '../CustomButton';
import Paper from '../Paper';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Header />
        <Container style={{ marginTop: 100 }}>
          <Paper>
            <Typography variant="h2">Hello World</Typography>
            <br />
            <CustomButton type="primary" variant="outlined" />
            <CustomButton type="secondary" />
          </Paper>
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;
