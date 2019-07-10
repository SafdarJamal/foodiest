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
  validateFoodieSignUpForm
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
      email: null,
      password: null,
      isProcessing: false,
      signUpError: null
    };

    this.validateFName = this.validateFName.bind(this);
    this.validateLName = this.validateLName.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.confirmPassword = this.confirmPassword.bind(this);
    this.signMeUp = this.signMeUp.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  validateFName(value) {
    const result = validateName(value);
    // console.log(result);

    if (result.isValid !== true) {
      this.setState({ fNameError: result.message });
    } else {
      this.setState({ fNameError: null });
    }
  }

  validateLName(value) {
    const result = validateName(value);
    // console.log(result);

    if (result.isValid !== true) {
      this.setState({ lNameError: result.message });
    } else {
      this.setState({ lNameError: null });
    }
  }

  validateEmail(value) {
    const result = validateEmail(value);
    // console.log(result);

    if (result.isValid !== true) {
      this.setState({ emailError: result.message });
    } else {
      this.setState({ emailError: null, email: value });
    }
  }

  validatePassword(value) {
    const result = validatePassword(value);
    // console.log(result);

    if (result.isValid !== true) {
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
    this.setState({ isProcessing: true });

    const result = validateFoodieSignUpForm();
    // console.log(result);

    let fName = true;
    let fNameError = null;

    let lName = true;
    let lNameError = null;

    let email = true;
    let emailError = null;

    let password = true;
    let passwordError = null;

    let confirmPassword = true;
    let confirmPasswordError = null;

    if (result.fName.isValid !== true) {
      fName = false;
      fNameError = result.fName.message;
    }
    if (result.lName.isValid !== true) {
      lName = false;
      lNameError = result.lName.message;
    }
    if (result.email.isValid !== true) {
      email = false;
      emailError = result.email.message;
    }
    if (result.password.isValid !== true) {
      password = false;
      passwordError = result.password.message;
    }
    if (
      result.confirmPassword.isValid !== true &&
      result.confirmPassword.isValid !== undefined
    ) {
      confirmPassword = false;
      confirmPasswordError = result.confirmPassword.message;
    }

    if (
      fName === false ||
      lName === false ||
      email === false ||
      password === false ||
      confirmPassword === false
    ) {
      this.setState({
        fNameError,
        lNameError,
        emailError,
        passwordError,
        confirmPasswordError,
        isProcessing: false
      });
      return false;
    }

    // console.log(this.state.email, this.state.password);

    this.props.firebase
      .signUp(this.state.email, this.state.password)
      .then(success => {
        const user = success.user;
        console.log(user);

        this.setState({ email: null, password: null, isProcessing: false });
      })
      .catch(error => {
        const errorMessage = error.message;
        console.log(errorMessage);

        this.setState({
          isProcessing: false,
          signUpError: errorMessage
        });
      });
  }

  dismissError() {
    this.setState({ signUpError: null });
  }

  render() {
    const {
      fNameError,
      lNameError,
      emailError,
      passwordError,
      confirmPasswordError,
      isProcessing,
      signUpError
    } = this.state;

    return (
      <Container style={{ marginTop: 125, width: 600 }}>
        {isProcessing && <Progress />}
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
              {signUpError && (
                <Grid
                  item
                  xs={12}
                  style={{
                    backgroundColor: '#EAF0F1',
                    border: '1px solid red',
                    textAlign: 'center',
                    margin: 10,
                    borderRadius: 2
                  }}
                >
                  <Typography variant="overline">
                    {signUpError}
                    <CustomButton
                      disableRipple={true}
                      type="secondary"
                      text="Dismiss"
                      clickMethod={this.dismissError}
                    />
                  </Typography>
                </Grid>
              )}
              <Grid item xs={12}>
                <InputField
                  focus={true}
                  label="First Name"
                  type="text"
                  validate={this.validateFName}
                  errorMessage={fNameError}
                  disabled={isProcessing}
                />
              </Grid>
              <Grid item xs={12}>
                <InputField
                  label="Last Name"
                  type="text"
                  validate={this.validateLName}
                  errorMessage={lNameError}
                  disabled={isProcessing}
                />
              </Grid>
              <Grid item xs={12}>
                <InputField
                  label="Email"
                  type="email"
                  validate={this.validateEmail}
                  errorMessage={emailError}
                  disabled={isProcessing}
                />
              </Grid>
              <Grid item xs={12}>
                <InputField
                  label="Password"
                  type="password"
                  InputProps={true}
                  validate={this.validatePassword}
                  errorMessage={passwordError}
                  disabled={isProcessing}
                />
              </Grid>
              <Grid item xs={12}>
                <InputField
                  label="Confirm Password"
                  type="password"
                  InputProps={true}
                  validate={this.confirmPassword}
                  errorMessage={confirmPasswordError}
                  disabled={isProcessing}
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
                        disabled={isProcessing}
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
                      disabled={isProcessing}
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
