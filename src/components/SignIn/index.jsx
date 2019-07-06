import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Paper from '../Paper';
import Typography from '@material-ui/core/Typography';
import InputField from '../InputField';
import CustomButton from '../CustomButton';
import Progress from '../Progress';
import Grid from '@material-ui/core/Grid';

import {
  validateEmail,
  validatePassword,
  validateSignInForm
} from '../SignUp/validate';

class SignIn extends Component {
  validateEmail(value) {
    const result = validateEmail(value);
    console.log(result);
  }

  validatePassword(value) {
    const result = validatePassword(value);
    console.log(result);
  }

  signMeIn() {
    const result = validateSignInForm();
    console.log(result);
  }

  render() {
    return (
      <Container style={{ marginTop: 125, width: 600 }}>
        <Progress />
        <Paper class0="root">
          <form noValidate autoComplete="off">
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Typography
                  variant="h1"
                  align="center"
                  style={{ marginBottom: 20 }}
                >
                  Sign In
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <InputField
                  label="Email"
                  type="email"
                  validate={this.validateEmail}
                />
              </Grid>
              <Grid item xs={12}>
                <InputField
                  label="Password"
                  type="password"
                  InputProps={true}
                  validate={this.validatePassword}
                />
              </Grid>
              <Grid
                container
                style={{ marginTop: 25, marginLeft: 12, marginRight: 12 }}
              >
                <Grid item xs={6}>
                  <div style={{ textAlign: 'left' }}>
                    <CustomButton
                      variant="outlined"
                      type="secondary"
                      text="Create account"
                      size="large"
                    />
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div style={{ textAlign: 'right' }}>
                    <CustomButton
                      variant="contained"
                      type="primary"
                      text="Sign me in"
                      size="large"
                      clickMethod={this.signMeIn}
                    />
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    );
  }
}

export default SignIn;
