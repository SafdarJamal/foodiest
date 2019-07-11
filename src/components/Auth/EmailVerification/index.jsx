import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Paper from '../../UI/Paper';
import Typography from '@material-ui/core/Typography';
import CustomButton from '../../UI/CustomButton';
import Progress from '../../UI/Progress';
import Grid from '@material-ui/core/Grid';

import { Redirect } from 'react-router-dom';
import { HOME, DASHBOARD } from '../../../constants/routes';

import { withFirebase } from '../../../services/firebase';

class EmailVerification extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isProcessing: false,
      errorMessage: null,
      redirectToReferrer: false
    };

    this.resendEmail = this.resendEmail.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  resendEmail() {
    this.setState({
      isProcessing: true
    });

    const { firebase } = this.props;

    firebase
      .sendVerificationEmail()
      .then(() => {
        console.log(this.props.firebase.auth.currentUser);

        this.setState({
          errorMessage: null,
          isProcessing: false,
          redirectToReferrer: true
        });
      })
      .catch(error => {
        const errorMessage = error.message;
        console.log(errorMessage);

        this.setState({
          isProcessing: false,
          errorMessage
        });
      });
  }

  dismissError() {
    this.setState({ errorMessage: null });
  }

  render() {
    const { isProcessing, errorMessage, redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      // return <Redirect to={HOME} />;
    }

    console.log(process.env.REACT_APP_EMAIL_CONFIRMATION_REDIRECT);

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
            {errorMessage && (
              <Grid
                item
                xs={12}
                style={{
                  backgroundColor: '#EAF0F1',
                  border: '1px solid red',
                  textAlign: 'center',
                  margin: 10,
                  borderRadius: 2
                }}
              >
                <Typography variant="overline">
                  {errorMessage}
                  <CustomButton
                    disableRipple={true}
                    type="secondary"
                    text="Dismiss"
                    clickMethod={this.dismissError}
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
              />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    );
  }
}

export default withFirebase(EmailVerification);
