import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

import Container from '@material-ui/core/Container';
import Paper from '../../UI/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CustomButton from '../../UI/CustomButton';
import Progress from '../../UI/Progress';

const EmailVerification = props => {
  const {
    resendEmail,
    isProcessing,
    successMessage,
    errorMessage,
    dismissMessage
  } = props;

  return (
    <Container className={styles.container}>
      {isProcessing && <Progress />}
      <Paper className="root">
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
            <Typography variant="subtitle1" align="center">
              Check your inbox to verify your email
              <br />
              Click the link in the email and you'll be good to go.
            </Typography>
          </Grid>
          <Grid item xs={12} className={styles.btnWrapper}>
            <CustomButton
              variant="contained"
              type="primary"
              size="large"
              onClick={resendEmail}
              disabled={isProcessing}
            >
              Resend
            </CustomButton>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

EmailVerification.propTypes = {
  resendEmail: PropTypes.func.isRequired,
  isProcessing: PropTypes.bool.isRequired,
  successMessage: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
  dismissMessage: PropTypes.func.isRequired
};

export default EmailVerification;
