import React, { Component } from 'react';
import { withFirebase } from '../../services/firebase';

import EmailVerification from '../../components/EmailVerification';

class EmailVerificationContainer extends Component {
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
        .sendEmailVerification()
        .then(() => {
          console.log(firebase.auth.currentUser);

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
      <EmailVerification
        resendEmail={this.resendEmail}
        isProcessing={isProcessing}
        successMessage={successMessage}
        errorMessage={errorMessage}
        dismissMessage={this.dismissMessage}
      />
    );
  }
}

export default withFirebase(EmailVerificationContainer);
