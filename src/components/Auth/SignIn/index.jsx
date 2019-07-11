import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Paper from '../../UI/Paper';
import Typography from '@material-ui/core/Typography';
import InputField from '../../UI/InputField';
import CustomButton from '../../UI/CustomButton';
import Progress from '../../UI/Progress';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { SignIn as SignInAction } from '../../../actions';

import { Link as RouterLink } from 'react-router-dom';

import { withFirebase } from '../../../services/firebase';

import {
  validateEmail,
  validatePassword,
  validateSignInForm
} from '../../../utils/validate';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailError: null,
      passwordError: null,
      email: null,
      password: null,
      isProcessing: false,
      signInError: null
    };

    this.validateEmail = this.validateEmail.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.signMeIn = this.signMeIn.bind(this);
    this.dismissError = this.dismissError.bind(this);
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

  signMeIn() {
    this.setState({ isProcessing: true });

    const result = validateSignInForm();
    // console.log(result);

    let email = true;
    let emailError = null;

    let password = true;
    let passwordError = null;

    if (result.email.isValid !== true) {
      email = false;
      emailError = result.email.message;
    }
    if (result.password.isValid !== true) {
      password = false;
      passwordError = result.password.message;
    }

    if (email === false || password === false) {
      this.setState({
        emailError,
        passwordError,
        isProcessing: false
      });
      return false;
    }

    // console.log(this.state.email, this.state.password);

    setTimeout(() => {
      const { firebase } = this.props;

      firebase
        .signIn(this.state.email, this.state.password)
        .then(success => {
          const user = success.user;
          console.log(user);

          this.setState({
            email: null,
            password: null,
            signInError: null,
            isProcessing: false
          });

          this.props.SignInAction();
        })
        .catch(error => {
          const errorMessage = error.message;
          console.log(errorMessage);

          this.setState({
            isProcessing: false,
            signInError: 'Email or password is incorrect.'
          });
        });
    }, 3000);
  }

  dismissError() {
    this.setState({ signInError: null });
  }

  render() {
    const { emailError, passwordError, isProcessing, signInError } = this.state;
    console.log(this.props);

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
                  Sign In
                </Typography>
              </Grid>
              {signInError && (
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
                    {signInError}
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
              <Grid
                item
                xs={12}
                style={{
                  textAlign: 'right',
                  marginRight: 10,
                  cursor: 'pointer'
                }}
              >
                <Link component={RouterLink} to="/signin/password-reset">
                  <Typography variant="subtitle1">Forgot Password?</Typography>
                </Link>
              </Grid>
              <Grid
                container
                style={{ marginTop: 25, marginLeft: 12, marginRight: 12 }}
              >
                <Grid item xs={6}>
                  <div style={{ textAlign: 'left' }}>
                    <RouterLink
                      to="/signup/type"
                      style={{ textDecoration: 'none' }}
                    >
                      <CustomButton
                        variant="outlined"
                        type="secondary"
                        text="Create account"
                        size="large"
                        disabled={isProcessing}
                      />
                    </RouterLink>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div style={{ textAlign: 'right' }}>
                    <CustomButton
                      variant="contained"
                      type="primary"
                      text="Sign me in"
                      size="large"
                      clickMethod={this.signMeIn}
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

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default compose(
  connect(
    mapStateToProps,
    { SignInAction }
  ),
  withFirebase
)(SignIn);
