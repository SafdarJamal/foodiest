import React, { Component } from 'react';

import { ThemeProvider } from '@material-ui/styles';
import theme from '../../theme';

// import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';

import Header from '../Header';
// import CustomButton from '../CustomButton';
// import Paper from '../Paper';
// import SignIn from '../SignIn';
import Landing from '../Landing';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Header />
        {/* <Container style={{ marginTop: 100 }}>
          <Paper>
            <Typography variant="h1" style={{ marginTop: 250 }}>
              Foodiest is the easy way to get
              <br />
              the food you love delivered.
            </Typography>
            <Typography variant="subtitle1" style={{ marginTop: 25 }}>
              Find food you love from local restaurants and chain favorites
            </Typography>

            <br />
            <CustomButton text="Get started" type="primary" size="large" />
          </Paper>
        </Container> */}
        <Landing />
      </ThemeProvider>
    );
  }
}

export default App;
