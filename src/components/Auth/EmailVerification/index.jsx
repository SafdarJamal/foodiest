import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Paper from '../../UI/Paper';
import Typography from '@material-ui/core/Typography';
import CustomButton from '../../UI/CustomButton';
import Progress from '../../UI/Progress';
import Grid from '@material-ui/core/Grid';

import { withFirebase } from '../../../services/firebase';

class EmailVerification extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isProcessing: false,
      successMessage: null,
      errorMessage: null
    };

    this.resendEmail = this.resendEmail.bind(this);
    this.dismissMessage = this.dismissMessage.bind(this);
  }

  resendEmail() {
    this.setState({
      isProcessing: true
    });

    setTimeout(() => {
      const { firebase } = this.props;

      firebase
        .verifyEmail()
        .then(() => {
          console.log(this.props.firebase.auth.currentUser);

          this.setState({
            successMessage:
              'Verification link has been send to your provided email address, check you mailbox.',
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
    const { isProcessing, successMessage, errorMessage } = this.state;

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
                Email Verification
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
                    clickMethod={this.dismissMessage}
                  />
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
            <Grid item xs={12} style={{ marginTop: 25, textAlign: 'center' }}>
              <CustomButton
                variant="contained"
                type="primary"
                text="Resend"
                size="large"
                clickMethod={this.resendEmail}
                disabled={isProcessing}
              />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    );
  }
}

export default withFirebase(EmailVerification);
