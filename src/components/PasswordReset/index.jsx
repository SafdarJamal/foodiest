import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '../Paper';
import Typography from '@material-ui/core/Typography';
import InputField from '../InputField';
import CustomButton from '../CustomButton';
import Progress from '../Progress';

const PasswordReset = () => {
  return (
    <Container style={{ marginTop: 100, width: 600 }}>
      <Progress />
      <Paper class0="root">
        <form noValidate autoComplete="off">
          <Typography variant="h1" align="center">
            Forgot your Password?
          </Typography>
          <br />
          <br />
          <InputField label="Email" type="email" />
          <Typography variant="subtitle1" align="center">
            We'll send you a link to reset your password.
          </Typography>
          <br />
          <div style={{ marginTop: 25 }}>
            <span style={{ marginRight: '90px', marginLeft: 8 }}>
              <CustomButton
                variant="outlined"
                type="secondary"
                text="Back to Sign in"
                size="large"
              />
            </span>
            <CustomButton
              variant="contained"
              type="primary"
              text="Email me reset link"
              size="large"
            />
          </div>
        </form>
      </Paper>
    </Container>
  );
};

export default PasswordReset;
