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
        <Container style={{ marginTop: 125 }}>
          <Paper>
            <Typography variant="h2">Hello World</Typography>
            <br />
            <Typography variant="overline">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur placeat inventore itaque omnis exercitationem corporis
              provident modi dolore adipisci consequuntur facere sint nobis
              soluta debitis fugit, quibusdam quae, fuga maiores.
            </Typography>
            <br />
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
