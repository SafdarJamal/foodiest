import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Paper from '../../../UI/Paper';
import Typography from '@material-ui/core/Typography';
import InputField from '../../../UI/InputField';
import CustomButton from '../../../UI/CustomButton';
import Progress from '../../../UI/Progress';
import Grid from '@material-ui/core/Grid';

import { Link } from 'react-router-dom';

import { withFirebase } from '../../../../services/firebase';

import {
  validateName,
  validateEmail,
  validatePassword,
  validateSignUpForm
} from '../../../../utils/validate';

class SignUpFoodie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fNameError: null,
      lNameError: null,
      emailError: null,
      passwordError: null,
      confirmPasswordError: null,
      password: null
    };

    this.validateFName = this.validateFName.bind(this);
    this.validateLName = this.validateLName.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.confirmPassword = this.confirmPassword.bind(this);
  }

  validateFName(value) {
    const result = validateName(value);
    // console.log(result);

    if (result.isValid === false) {
      this.setState({ fNameError: result.message });
    } else {
      this.setState({ fNameError: null });
    }
  }

  validateLName(value) {
    const result = validateName(value);
    // console.log(result);

    if (result.isValid === false) {
      this.setState({ lNameError: result.message });
    } else {
      this.setState({ lNameError: null });
    }
  }

  validateEmail(value) {
    const result = validateEmail(value);
    // console.log(result);

    if (result.isValid === false) {
      this.setState({ emailError: result.message });
    } else {
      this.setState({ emailError: null });
    }
  }

  validatePassword(value) {
    const result = validatePassword(value);
    // console.log(result);

    if (result.isValid === false) {
      this.setState({ passwordError: result.message });
    } else {
      this.setState({ passwordError: null, password: value });
    }
  }

  confirmPassword(value) {
    const { password } = this.state;

    if (value !== password) {
      this.setState({ confirmPasswordError: `Passwords didn't match !` });
    } else {
      this.setState({ confirmPasswordError: null });
    }
  }

  signMeUp() {
    const result = validateSignUpForm();
    console.log(result);
  }

  render() {
    const {
      fNameError,
      lNameError,
      emailError,
      passwordError,
      confirmPasswordError
    } = this.state;

    // console.log(this.props.firebase);
    // console.log(fNameError, lNameError);

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
                  errorMessage={fNameError}
                />
              </Grid>
              <Grid item xs={12}>
                <InputField
                  label="Last Name"
                  type="text"
                  validate={this.validateLName}
                  errorMessage={lNameError}
                />
              </Grid>
              <Grid item xs={12}>
                <InputField
                  label="Email"
                  type="email"
                  validate={this.validateEmail}
                  errorMessage={emailError}
                />
              </Grid>
              <Grid item xs={12}>
                <InputField
                  label="Password"
                  type="password"
                  InputProps={true}
                  validate={this.validatePassword}
                  errorMessage={passwordError}
                />
              </Grid>
              <Grid item xs={12}>
                <InputField
                  label="Confirm Password"
                  type="password"
                  InputProps={true}
                  validate={this.confirmPassword}
                  errorMessage={confirmPasswordError}
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

export default withFirebase(SignUpFoodie);
