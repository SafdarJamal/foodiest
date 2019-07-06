import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '../Paper';
import Typography from '@material-ui/core/Typography';
import CustomButton from '../CustomButton';
import Progress from '../Progress';

const EmailVerification = () => {
  return (
    <Container style={{ marginTop: 100, width: 600 }}>
      <Progress />
      <Paper class0="root">
        <form noValidate autoComplete="off">
          <Typography variant="h1" align="center">
            Email Verification
          </Typography>
          <br />
          <br />
          <Typography variant="subtitle1" align="center">
            Check your inbox to verify your email
            <br />
            Click the link in the email and you'll be good to go.
          </Typography>
          <div style={{ marginTop: 25, textAlign: 'center' }}>
            <CustomButton
              variant="contained"
              type="primary"
              text="Resend"
              size="large"
              clickMethod={() =>
                alert(
                  'Verification link has been send to your provided email address, check you mailbox.'
                )
              }
            />
          </div>
        </form>
      </Paper>
    </Container>
  );
};

export default EmailVerification;
