import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';
import { Link as RouterLink } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

import Container from '@material-ui/core/Container';
import Paper from '../UI/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import InputField from '../UI/InputField';
import CustomButton from '../UI/CustomButton';
import Progress from '../UI/Progress';
import Link from '@material-ui/core/Link';

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
                    onClick={dismissError}
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
                    onClick={signMeIn}
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
