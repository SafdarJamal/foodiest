import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';
import { Link as RouterLink } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import InputField from '../UI/InputField';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(5, 3)
  }
}));

const SignIn = props => {
  const {
    validateEmail,
    validatePassword,
    signMeIn,
    emailError,
    passwordError,
    isProcessing,
    signInError,
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
                Sign In
              </Typography>
            </Grid>
            {signInError && (
              <Grid item xs={12} className={styles.error}>
                <Typography variant="overline">
                  {signInError}
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
            <Grid item xs={12} className={styles.passwordResetLink}>
              <Link component={RouterLink} to={ROUTES.RESET_PASSWORD}>
                <Typography variant="subtitle1">Forgot Password?</Typography>
              </Link>
            </Grid>
            <Grid container className={styles.btnWrapper}>
              <Grid item xs={6}>
                <div className={styles.btnWrapperChild1}>
                  <RouterLink to={ROUTES.SIGNUP} className={styles.link}>
                    <Button
                      variant="outlined"
                      // color="secondary"
                      size="large"
                      disabled={isProcessing}
                    >
                      Create Account
                    </Button>
                  </RouterLink>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className={styles.btnWrapperChild2}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={signMeIn}
                    disabled={isProcessing}
                  >
                    Sign Me In
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

SignIn.propTypes = {
  validateEmail: PropTypes.func.isRequired,
  validatePassword: PropTypes.func.isRequired,
  signMeIn: PropTypes.func.isRequired,
  emailError: PropTypes.string,
  passwordError: PropTypes.string,
  isProcessing: PropTypes.bool.isRequired,
  signInError: PropTypes.string,
  dismissError: PropTypes.func.isRequired
};

export default SignIn;
