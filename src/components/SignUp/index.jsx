import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Paper from '../Paper';
import Typography from '@material-ui/core/Typography';
import InputField from '../InputField';
import CustomButton from '../CustomButton';

class SignUp extends Component {
  render() {
    return (
      <Container style={{ marginTop: 100, width: 600 }}>
        <Paper class0="root">
          <Typography variant="h1" align="center">
            Sign Up
          </Typography>
          <InputField label="First Name" type="text" />
          <InputField label="Last Name" type="text" />
          <InputField label="Email" type="email" />
          <InputField label="Passowrd" type="password" InputProps={true} />
          <InputField
            label="Confirm Passowrd"
            type="password"
            InputProps={true}
          />
          <div style={{ textAlign: 'right' }}>
            <CustomButton type="primary" text="Next" size="large" />
          </div>
        </Paper>
      </Container>
    );
  }
}

export default SignUp;