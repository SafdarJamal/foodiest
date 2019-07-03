import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Paper from '../Paper';
import Typography from '@material-ui/core/Typography';
import InputField from '../InputField';
import CustomButton from '../CustomButton';

class SignIn extends Component {
  render() {
    return (
      <Container style={{ marginTop: 100, width: 600 }}>
        <Paper class0="root">
          <Typography variant="h1" align="center">
            Sign In
          </Typography>
          <InputField label="Email" type="email" />
          <InputField label="Passowrd" type="password" InputProps={true} />
          <div style={{ textAlign: 'right' }}>
            <CustomButton
              variant="contained"
              type="primary"
              text="Next"
              size="large"
            />
          </div>
        </Paper>
      </Container>
    );
  }
}

export default SignIn;
