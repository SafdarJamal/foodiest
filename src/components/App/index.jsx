import React, { Component, Fragment } from 'react';

import Typography from '@material-ui/core/Typography';

import CustomButton from '../CustomButton';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Typography variant="h2">Hello World</Typography>
        <br />
        <CustomButton text="Next" type="primary" />
        <CustomButton text="Master" type="primary" />
        <CustomButton text="" type="primary" />
        <CustomButton text="" type="secondary" />
      </Fragment>
    );
  }
}

export default App;
