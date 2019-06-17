import React, { Component, Fragment } from 'react';

import PrimaryButton from '../PrimaryButton';

import Typography from '@material-ui/core/Typography';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Typography variant="h2">Hello World</Typography>
        <br />
        <PrimaryButton text="Next" />
        <PrimaryButton text="" />
        <PrimaryButton text="" />
        <PrimaryButton text="Next" />
      </Fragment>
    );
  }
}

export default App;
