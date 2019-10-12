import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

import Container from '@material-ui/core/Container';
import Paper from '../UI/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import InputField from '../UI/InputField';
import CustomButton from '../UI/CustomButton';
import Progress from '../UI/Progress';

const PasswordReset = props => {
  const {
    validateEmail,
    sendEmail,
    emailError,
    isProcessing,
    successMessage,
    errorMessage,
    dismissMessage
  } = props;

  return (
    <Container className={styles.container}>
      {isProcessing && <Progress />}
      <Paper className="root">
        <form noValidate autoComplete="off">
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography variant="h1" className={styles.title}>
                Forgot your Password?
              </Typography>
            </Grid>
            {(successMessage || errorMessage) && (
              <Grid
                item
                xs={12}
                className={successMessage ? styles.success : styles.error}
              >
                <Typography variant="overline">
                  {successMessage ? successMessage : errorMessage}
                  <CustomButton
                    // type="secondary"
                    disableRipple={true}
                    onClick={dismissMessage}
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
              <Typography variant="subtitle1" align="center">
                We'll send you a link to reset your password.
              </Typography>
            </Grid>
            <Grid container className={styles.btnWrapper}>
              <Grid item xs={6}>
                <div className={styles.btnWrapperChild1}>
                  <Link to={ROUTES.SIGNIN} className={styles.link}>
                    <CustomButton
                      variant="outlined"
                      // type="secondary"
                      size="large"
                      disabled={isProcessing}
                    >
                      Back to Sign In
                    </CustomButton>
                  </Link>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className={styles.btnWrapperChild2}>
                  <CustomButton
                    variant="contained"
                    type="primary"
                    size="large"
                    onClick={sendEmail}
                    disabled={isProcessing}
                  >
                    Email me Reset Link
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

PasswordReset.propTypes = {
  validateEmail: PropTypes.func.isRequired,
  sendEmail: PropTypes.func.isRequired,
  emailError: PropTypes.string.isRequired,
  isProcessing: PropTypes.bool.isRequired,
  successMessage: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
  dismissMessage: PropTypes.func.isRequired
};

export default PasswordReset;
