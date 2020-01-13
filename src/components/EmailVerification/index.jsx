import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(5, 3)
  }
}));

const EmailVerification = props => {
  const {
    resendEmail,
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
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography variant="h1" className={styles.title}>
              Email Verification
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
                  // color="secondary"
                  disableRipple={true}
                  onClick={dismissMessage}
                >
                  Dismiss
                </Button>
              </Typography>
            </Grid>
          )}
          <Grid item xs={12}>
            <Typography variant="subtitle1" align="center">
              Check your inbox to verify your email
              <br />
              Click the link in the email and you'll be good to go.
            </Typography>
          </Grid>
          <Grid item xs={12} className={styles.btnWrapper}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={resendEmail}
              disabled={isProcessing}
            >
              Resend
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

EmailVerification.propTypes = {
  resendEmail: PropTypes.func.isRequired,
  isProcessing: PropTypes.bool.isRequired,
  successMessage: PropTypes.string,
  errorMessage: PropTypes.string,
  dismissMessage: PropTypes.func.isRequired
};

export default EmailVerification;
