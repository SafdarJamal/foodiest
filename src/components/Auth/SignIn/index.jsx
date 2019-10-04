import React, { Component } from 'react';
import styles from './style.module.css';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withFirebase } from '../../../services/firebase';
import { Loading, SignIn as SignInAction } from '../../../actions';
import { Link as RouterLink } from 'react-router-dom';

import * as ROUTES from '../../../constants/routes';

import Container from '@material-ui/core/Container';
import Paper from '../../UI/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import InputField from '../../UI/InputField';
import CustomButton from '../../UI/CustomButton';
import Progress from '../../UI/Progress';
import Link from '@material-ui/core/Link';

import {
  validateEmail,
  validatePassword,
  validateSignInForm
} from '../../../utils/validate';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this._isMounted = false;

    this.state = {
      email: null,
      password: null,
      emailError: null,
      passwordError: null,
      isProcessing: false,
      signInError: null
    };

    this.validateEmail = this.validateEmail.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.signMeIn = this.signMeIn.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
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
      const { firebase, Loading, SignInAction } = this.props;
      const { email, password } = this.state;

      firebase
        .signIn(email, password)
        .then(success => {
          const user = success.user;
          // console.log(user);

          if (this._isMounted) {
            this.setState({
              email: null,
              password: null,
              signInError: null,
              isProcessing: false
            });
          }

          Loading({ isLoading: true });

          return firebase.getUser(user.uid);
        })
        .then(querySnapshot => {
          const userData = querySnapshot.data();
          userData.uid = firebase.auth.currentUser.uid;
          userData.isVerified = firebase.auth.currentUser.emailVerified;

          setTimeout(() => {
            SignInAction(userData);
            Loading({ isLoading: false });
          }, 2000);
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

    return (
      <Container className={styles.container}>
        {isProcessing && <Progress />}
        <Paper className="root">
          <form noValidate autoComplete="off">
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Typography variant="h1" className={styles.title}>
                  Sign In
                </Typography>
              </Grid>
              {signInError && (
                <Grid item xs={12} className={styles.error}>
                  <Typography variant="overline">
                    {signInError}
                    <CustomButton
                      // type="secondary"
                      disableRipple={true}
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
              <Grid item xs={12} className={styles.passwordResetLink}>
                <Link component={RouterLink} to={ROUTES.PASSWORD_RESET}>
                  <Typography variant="subtitle1">Forgot Password?</Typography>
                </Link>
              </Grid>
              <Grid container className={styles.btnWrapper}>
                <Grid item xs={6}>
                  <div className={styles.btnWrapperChild1}>
                    <RouterLink to={ROUTES.SIGNUP} className={styles.link}>
                      <CustomButton
                        variant="outlined"
                        // type="secondary"
                        size="large"
                        disabled={isProcessing}
                      >
                        Create Account
                      </CustomButton>
                    </RouterLink>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className={styles.btnWrapperChild2}>
                    <CustomButton
                      variant="contained"
                      type="primary"
                      size="large"
                      onClick={this.signMeIn}
                      disabled={isProcessing}
                    >
                      Sign Me In
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
    { Loading, SignInAction }
  ),
  withFirebase
)(SignIn);
