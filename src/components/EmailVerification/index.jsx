import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '../Paper';
import Typography from '@material-ui/core/Typography';
import InputField from '../InputField';
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
          <InputField label="Email" type="email" />
          <div style={{ marginTop: 25 }}>
            <span style={{ marginRight: '160px', marginLeft: 8 }}>
              <CustomButton
                variant="outlined"
                type="secondary"
                text="Sign in instead"
                size="large"
              />
            </span>
            <CustomButton
              variant="contained"
              type="primary"
              text="Sign me up"
              size="large"
              // clickMethod={this.signMeUp}
            />
          </div>
        </form>
      </Paper>
    </Container>
  );
};

export default EmailVerification;
