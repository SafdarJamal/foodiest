import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Paper from '../../UI/Paper';
import Typography from '@material-ui/core/Typography';
import InputField from '../../UI/InputField';
import CustomButton from '../../UI/CustomButton';
import Progress from '../../UI/Progress';
import Grid from '@material-ui/core/Grid';

import { withFirebase } from '../../../services/firebase';

import { Link } from 'react-router-dom';

import {
  validateEmail,
  validatePasswordResetForm
} from '../../../utils/validate';

class PasswordReset extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      emailError: null,
      isProcessing: false,
      successMessage: null,
      errorMessage: null
    };

    this.validateEmail = this.validateEmail.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
    this.dismissMessage = this.dismissMessage.bind(this);
  }

  validateEmail(value) {
    const result = validateEmail(value);
    // console.log(result);

    if (result.isValid !== true) {
      this.setState({ emailError: result.message });
    } else {
      this.setState({ emailError: null, email: value });
    }
  }

  sendEmail() {
    this.setState({
      isProcessing: true
    });

    const result = validatePasswordResetForm();

    let email = true;
    let emailError = null;

    if (result.isValid !== true) {
      email = false;
      emailError = result.message;
    }

    if (email === false) {
      this.setState({
        emailError,
        isProcessing: false
      });
      return false;
    }

    setTimeout(() => {
      const { firebase } = this.props;

      firebase
        .passwordReset(this.state.email)
        .then(() => {
          this.setState({
            successMessage:
              'Password reset link has been send to your provided email address, check you mailbox.',
            errorMessage: null,
            isProcessing: false
          });
        })
        .catch(error => {
          const errorMessage = error.message;
          console.log(errorMessage);

          this.setState({
            successMessage: null,
            errorMessage,
            isProcessing: false
          });
        });
    }, 3000);
  }

  dismissMessage() {
    this.setState({ successMessage: null, errorMessage: null });
  }

  render() {
    const {
      emailError,
      isProcessing,
      successMessage,
      errorMessage
    } = this.state;

    return (
      <Container style={{ marginTop: 100, width: 600 }}>
        {isProcessing && <Progress />}
        <Paper class0="root">
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography
                variant="h1"
                align="center"
                style={{ marginBottom: 20 }}
              >
                Forgot your Password?
              </Typography>
            </Grid>
            {(successMessage || errorMessage) && (
              <Grid
                item
                xs={12}
                style={{
                  backgroundColor: '#EAF0F1',
                  border: `1px solid ${successMessage ? 'green' : 'red'}`,
                  textAlign: 'center',
                  margin: 10,
                  borderRadius: 2
                }}
              >
                <Typography variant="overline">
                  {successMessage ? successMessage : errorMessage}
                  <CustomButton
                    disableRipple={true}
                    type="secondary"
                    text="Dismiss"
                    onClick={this.dismissMessage}
                  />
                </Typography>
              </Grid>
            )}
            <Grid item xs={12}>
              <InputField
                focus={true}
                label="Email"
                type="email"
                validate={this.validateEmail}
                errorMessage={emailError}
                disabled={isProcessing}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" align="center">
                We'll send you a link to reset your password.
              </Typography>
            </Grid>
            <Grid
              container
              style={{ marginTop: 25, marginLeft: 12, marginRight: 12 }}
            >
              <Grid item xs={6}>
                <div style={{ textAlign: 'left' }}>
                  <Link to="/signin" style={{ textDecoration: 'none' }}>
                    <CustomButton
                      variant="outlined"
                      type="secondary"
                      text="Back to Sign in"
                      size="large"
                      disabled={isProcessing}
                    />
                  </Link>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div style={{ textAlign: 'right' }}>
                  <CustomButton
                    variant="contained"
                    type="primary"
                    text="Email me reset link"
                    size="large"
                    onClick={this.sendEmail}
                    disabled={isProcessing}
                  />
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    );
  }
}

export default withFirebase(PasswordReset);
