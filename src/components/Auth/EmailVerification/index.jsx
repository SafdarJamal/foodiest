import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '../../UI/Paper';
import Typography from '@material-ui/core/Typography';
import CustomButton from '../../UI/CustomButton';
import Progress from '../../UI/Progress';
import Grid from '@material-ui/core/Grid';

const EmailVerification = () => {
  return (
    <Container style={{ marginTop: 100, width: 600 }}>
      <Progress />
      <Paper class0="root">
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography
              variant="h1"
              align="center"
              style={{ marginBottom: 20 }}
            >
              Email Verification
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" align="center">
              Check your inbox to verify your email
              <br />
              Click the link in the email and you'll be good to go.
            </Typography>
          </Grid>
          <Grid item xs={12} style={{ marginTop: 25, textAlign: 'center' }}>
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
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default EmailVerification;
