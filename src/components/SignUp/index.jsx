import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import InputField from '../UI/InputField';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(5, 3)
  }
}));

const SignUp = props => {
  const {
    validateFName,
    validateLName,
    validateEmail,
    validatePassword,
    confirmPassword,
    signMeUp,
    fNameError,
    lNameError,
    emailError,
    passwordError,
    confirmPasswordError,
    isProcessing,
    signUpError,
    dismissError
  } = props;

  const classes = useStyles();

  return (
    <Container className={styles.container}>
      {isProcessing && <LinearProgress />}
      <Paper elevation={2} className={classes.root}>
        <form noValidate autoComplete="off">
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography variant="h1" className={styles.title}>
                Sign Up
              </Typography>
            </Grid>
            {signUpError && (
              <Grid item xs={12} className={styles.error}>
                <Typography variant="overline">
                  {signUpError}
                  <Button
                    // color="secondary"
                    disableRipple={true}
                    onClick={dismissError}
                  >
                    Dismiss
                  </Button>
                </Typography>
              </Grid>
            )}
            <Grid item xs={12}>
              <InputField
                focus={true}
                label="First Name"
                type="text"
                validate={validateFName}
                errorMessage={fNameError}
                disabled={isProcessing}
              />
            </Grid>
            <Grid item xs={12}>
              <InputField
                label="Last Name"
                type="text"
                validate={validateLName}
                errorMessage={lNameError}
                disabled={isProcessing}
              />
            </Grid>
            <Grid item xs={12}>
              <InputField
                label="Email"
                type="email"
                validate={validateEmail}
                errorMessage={emailError}
                disabled={isProcessing}
              />
            </Grid>
            <Grid item xs={12}>
              <InputField
                label="Password"
                type="password"
                validate={validatePassword}
                errorMessage={passwordError}
                disabled={isProcessing}
              />
            </Grid>
            <Grid item xs={12}>
              <InputField
                label="Confirm Password"
                type="password"
                validate={confirmPassword}
                errorMessage={confirmPasswordError}
                disabled={isProcessing}
              />
            </Grid>
            <Grid container className={styles.btnWrapper}>
              <Grid item xs={6}>
                <div className={styles.btnWrapperChild1}>
                  <Link to={ROUTES.SIGNIN} className={styles.link}>
                    <Button
                      variant="outlined"
                      // color="secondary"
                      size="large"
                      disabled={isProcessing}
                    >
                      Sign In Instead
                    </Button>
                  </Link>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className={styles.btnWrapperChild2}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={signMeUp}
                    disabled={isProcessing}
                  >
                    Sign Me Up
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

SignUp.propTypes = {
  validateFName: PropTypes.func.isRequired,
  validateLName: PropTypes.func.isRequired,
  validateEmail: PropTypes.func.isRequired,
  validatePassword: PropTypes.func.isRequired,
  confirmPassword: PropTypes.func.isRequired,
  signMeUp: PropTypes.func.isRequired,
  fNameError: PropTypes.string,
  lNameError: PropTypes.string,
  emailError: PropTypes.string,
  passwordError: PropTypes.string,
  confirmPasswordError: PropTypes.string,
  isProcessing: PropTypes.bool.isRequired,
  signUpError: PropTypes.string,
  dismissError: PropTypes.func.isRequired
};

export default SignUp;
