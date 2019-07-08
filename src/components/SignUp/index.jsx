import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Paper from '../Paper';
import Typography from '@material-ui/core/Typography';
import InputField from '../InputField';
import CustomButton from '../CustomButton';
import Progress from '../Progress';
import Grid from '@material-ui/core/Grid';

import { Link } from 'react-router-dom';

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
    const result = validateSignUpForm();
    console.log(result);
  }

  render() {
    return (
      <Container style={{ marginTop: 125, width: 600 }}>
        <Progress />
        <Paper class0="root">
          <form noValidate autoComplete="off">
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Typography
                  variant="h1"
                  align="center"
                  style={{ marginBottom: 20 }}
                >
                  Sign Up
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <InputField
                  focus={true}
                  label="First Name"
                  type="text"
                  validate={this.validateFName}
                  // errorMessage="Invalid name"
                />
              </Grid>
              <Grid item xs={12}>
                <InputField
                  label="Last Name"
                  type="text"
                  validate={this.validateLName}
                />
              </Grid>
              <Grid item xs={12}>
                <InputField
                  label="Email"
                  type="email"
                  validate={this.validateEmail}
                />
              </Grid>
              <Grid item xs={12}>
                <InputField
                  label="Password"
                  type="password"
                  InputProps={true}
                  validate={this.validatePassword}
                />
              </Grid>
              <Grid item xs={12}>
                <InputField
                  label="Confirm Password"
                  type="password"
                  InputProps={true}
                  validate={this.confirmPassword}
                />
              </Grid>
              <Grid
                container
                style={{ marginTop: 25, marginLeft: 12, marginRight: 12 }}
              >
                <Grid item xs={6}>
                  <div style={{ textAlign: 'left' }}>
                    <Link to="/signin" style={{ textDecoration: 'none' }}>
                      <CustomButton
                        variant="outlined"
                        type="secondary"
                        text="Sign in instead"
                        size="large"
                      />
                    </Link>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div style={{ textAlign: 'right' }}>
                    <CustomButton
                      variant="contained"
                      type="primary"
                      text="Sign me up"
                      size="large"
                      clickMethod={this.signMeUp}
                    />
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    );
  }
}

export default SignUp;
