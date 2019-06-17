import React, { Component, Fragment } from 'react';

import Typography from '@material-ui/core/Typography';

import CustomButton from '../CustomButton';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Typography variant="h2">Hello World</Typography>
        <br />
        <CustomButton type="primary" />
        <CustomButton type="secondary" />
      </Fragment>
    );
  }
}

export default App;
