import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Paper from '../Paper';
import Typography from '@material-ui/core/Typography';
import InputField from '../InputField';
import CustomButton from '../CustomButton';
import Progress from '../Progress';

import {
  validateName,
  validateEmail,
  validatePassword,
  validateSignUpForm
} from './validate';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: null
    };

    this.validatePassword = this.validatePassword.bind(this);
    this.confirmPassword = this.confirmPassword.bind(this);
  }

  validateFName(value) {
    const result = validateName(value);
    console.log(result);
  }

  validateLName(value) {
    const result = validateName(value);
    console.log(result);
  }

  validateEmail(value) {
    const result = validateEmail(value);
    console.log(result);
  }

  validatePassword(value) {
    const result = validatePassword(value);
    console.log(result);
    if (result) {
      this.setState({ password: value });
    }
  }

  confirmPassword(value) {
    const { password } = this.state;
    let result = false;
    if (value === password) {
      result = true;
    }
    console.log(result);
  }

  signMeUp() {
    console.log('===>>>');
    console.log(validateSignUpForm());
  }

  render() {
    return (
      <Container style={{ marginTop: 100, width: 600 }}>
        <Progress />
        <Paper class0="root">
          <form noValidate autoComplete="off">
            <Typography variant="h1" align="center">
              Sign Up
            </Typography>
            <br />
            <InputField
              label="First Name"
              type="text"
              validate={this.validateFName}
              // errorMessage="Invalid name"
            />
            <InputField
              label="Last Name"
              type="text"
              validate={this.validateLName}
            />
            <InputField
              label="Email"
              type="email"
              validate={this.validateEmail}
            />
            <InputField
              label="Password"
              type="password"
              InputProps={true}
              validate={this.validatePassword}
            />
            <InputField
              label="Confirm Password"
              type="password"
              InputProps={true}
              validate={this.confirmPassword}
            />
            <div style={{ marginTop: 25 }}>
              <span style={{ marginRight: '160px', marginLeft: 8 }}>
                <CustomButton
                  variant="outlined"
                  type="secondary"
                  text="Sign in instead"
                  size="large"
                />
              </span>
              <CustomButton
                variant="contained"
                type="primary"
                text="Sign me up"
                size="large"
                clickMethod={this.signMeUp}
              />
            </div>
          </form>
        </Paper>
      </Container>
    );
  }
}

export default SignUp;
