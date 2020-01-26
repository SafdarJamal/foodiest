import React, { Component } from 'react';
import { withFirebase } from '../../services/firebase';
import { validateEmail, validatePasswordResetForm } from '../../utils/validate';

import ResetPassword from '../../components/ResetPassword';

class ResetPasswordContainer extends Component {
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
        .resetPassword(this.state.email)
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
      <ResetPassword
        validateEmail={this.validateEmail}
        sendEmail={this.sendEmail}
        emailError={emailError}
        isProcessing={isProcessing}
        successMessage={successMessage}
        errorMessage={errorMessage}
        dismissMessage={this.dismissMessage}
      />
    );
  }
}

export default withFirebase(ResetPasswordContainer);
