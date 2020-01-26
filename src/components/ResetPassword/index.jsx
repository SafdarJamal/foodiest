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

const ResetPassword = props => {
  const {
    validateEmail,
    sendEmail,
    emailError,
    isProcessing,
    successMessage,
    errorMessage,
    dismissMessage
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
                  <Button
                    // type="secondary"
                    disableRipple={true}
                    onClick={dismissMessage}
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
              <Typography variant="subtitle1" align="center">
                We'll send you a link to reset your password.
              </Typography>
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
                      Back to Sign In
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
                    onClick={sendEmail}
                    disabled={isProcessing}
                  >
                    Email me Reset Link
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

ResetPassword.propTypes = {
  validateEmail: PropTypes.func.isRequired,
  sendEmail: PropTypes.func.isRequired,
  emailError: PropTypes.string,
  isProcessing: PropTypes.bool.isRequired,
  successMessage: PropTypes.string,
  errorMessage: PropTypes.string,
  dismissMessage: PropTypes.func.isRequired
};

export default ResetPassword;
