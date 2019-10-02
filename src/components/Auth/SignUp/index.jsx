import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withFirebase } from '../../../services/firebase';
import { Loading, SignIn } from '../../../actions';
import { Link, withRouter } from 'react-router-dom';

import * as ROUTES from '../../../constants/routes';
import * as USER_TYPES from '../../../constants/userTypes';

import Container from '@material-ui/core/Container';
import Paper from '../../UI/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import InputField from '../../UI/InputField';
import CustomButton from '../../UI/CustomButton';
import Progress from '../../UI/Progress';

import {
  validateName,
  validateEmail,
  validatePassword,
  validateSignUpForm
} from '../../../utils/validate';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.type = null;

    switch (props.location.pathname) {
      case ROUTES.SIGNUP_RESTAURATEUR:
        this.type = USER_TYPES.RESTAURATEUR;
        break;
      case ROUTES.SIGNUP_FOODIE:
        this.type = USER_TYPES.FOODIE;
        break;
      default:
        break;
    }

    this._isMounted = false;

    this.state = {
      fName: null,
      lName: null,
      email: null,
      password: null,
      fNameError: null,
      lNameError: null,
      emailError: null,
      passwordError: null,
      confirmPasswordError: null,
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

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  validateFName(value) {
    const result = validateName(value);
    // console.log(result);

    if (result.isValid !== true) {
      this.setState({ fNameError: result.message });
    } else {
      this.setState({ fNameError: null, fName: value });
    }
  }

  validateLName(value) {
    const result = validateName(value);
    // console.log(result);

    if (result.isValid !== true) {
      this.setState({ lNameError: result.message });
    } else {
      this.setState({ lNameError: null, lName: value });
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

    const result = validateSignUpForm();
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

    setTimeout(() => {
      const { firebase, Loading, SignIn } = this.props;
      const { fName, lName, email, password } = this.state;

      firebase
        .signUp(email, password)
        .then(success => {
          const user = success.user;
          // console.log(user);

          const userData = {
            fName,
            lName,
            email,
            type: this.type
          };

          return firebase.addUser(user.uid, userData);
        })
        .then(() => firebase.verifyEmail())
        .then(() => {
          if (this._isMounted) {
            this.setState({
              fName: null,
              lName: null,
              email: null,
              password: null,
              signUpError: null,
              isProcessing: false
            });
          }

          Loading({ isLoading: true });

          return firebase.getUser(firebase.auth.currentUser.uid);
        })
        .then(querySnapshot => {
          const userData = querySnapshot.data();
          userData.uid = firebase.auth.currentUser.uid;
          userData.isVerified = firebase.auth.currentUser.emailVerified;

          setTimeout(() => {
            SignIn(userData);
            Loading({ isLoading: false });
          }, 2000);
        })
        .catch(error => {
          const errorMessage = error.message;
          console.log(errorMessage);

          this.setState({
            isProcessing: false,
            signUpError: errorMessage
          });
        });
    }, 3000);
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
        <Paper className="root">
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
                      // type="secondary"
                      onClick={this.dismissError}
                    >
                      Dismiss
                    </CustomButton>
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
                  validate={this.validatePassword}
                  errorMessage={passwordError}
                  disabled={isProcessing}
                />
              </Grid>
              <Grid item xs={12}>
                <InputField
                  label="Confirm Password"
                  type="password"
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
                    <Link to={ROUTES.SIGNIN} style={{ textDecoration: 'none' }}>
                      <CustomButton
                        variant="outlined"
                        // type="secondary"
                        size="large"
                        disabled={isProcessing}
                      >
                        Sign In Instead
                      </CustomButton>
                    </Link>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div style={{ textAlign: 'right' }}>
                    <CustomButton
                      variant="contained"
                      type="primary"
                      size="large"
                      onClick={this.signMeUp}
                      disabled={isProcessing}
                    >
                      Sign Me Up
                    </CustomButton>
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

export default compose(
  connect(
    null,
    { Loading, SignIn }
  ),
  withFirebase,
  withRouter
)(SignUp);