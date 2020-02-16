import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withFirebase } from '../../services/firebase';
import { startLoading, stopLoading, setUser } from '../../actions';
import {
  validateEmail,
  validatePassword,
  validateSignInForm
} from '../../utils/validate';

import SignIn from '../../components/SignIn';

class SignInContainer extends Component {
  constructor(props) {
    super(props);

    this._isMounted = false;

    this.state = {
      email: null,
      password: null,
      emailError: null,
      passwordError: null,
      isProcessing: false,
      signInError: null
    };

    this.validateEmail = this.validateEmail.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.signMeIn = this.signMeIn.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
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

  validatePassword(value) {
    const result = validatePassword(value);
    // console.log(result);

    if (result.isValid !== true) {
      this.setState({ passwordError: result.message });
    } else {
      this.setState({ passwordError: null, password: value });
    }
  }

  signMeIn() {
    this.setState({ isProcessing: true });

    const result = validateSignInForm();
    // console.log(result);

    let email = true;
    let emailError = null;

    let password = true;
    let passwordError = null;

    if (result.email.isValid !== true) {
      email = false;
      emailError = result.email.message;
    }
    if (result.password.isValid !== true) {
      password = false;
      passwordError = result.password.message;
    }

    if (email === false || password === false) {
      this.setState({
        emailError,
        passwordError,
        isProcessing: false
      });
      return false;
    }

    // console.log(this.state.email, this.state.password);

    setTimeout(() => {
      const { firebase, startLoading, stopLoading, setUser } = this.props;
      const { email, password } = this.state;

      firebase
        .signIn(email, password)
        .then(success => {
          const user = success.user;
          // console.log(user);

          if (this._isMounted) {
            this.setState({
              email: null,
              password: null,
              signInError: null,
              isProcessing: false
            });
          }

          startLoading();

          return firebase.getUser(user.uid);
        })
        .then(querySnapshot => {
          const userData = querySnapshot.data();
          userData.uid = firebase.auth.currentUser.uid;
          userData.isVerified = firebase.auth.currentUser.emailVerified;

          setTimeout(() => {
            setUser({ user: userData });
            stopLoading();
          }, 2000);
        })
        .catch(error => {
          const errorMessage = error.message;
          console.log(errorMessage);

          this.setState({
            isProcessing: false,
            signInError: 'Email or password is incorrect.'
          });
        });
    }, 3000);
  }

  dismissError() {
    this.setState({ signInError: null });
  }

  render() {
    const { emailError, passwordError, isProcessing, signInError } = this.state;

    return (
      <SignIn
        validateEmail={this.validateEmail}
        validatePassword={this.validatePassword}
        signMeIn={this.signMeIn}
        emailError={emailError}
        passwordError={passwordError}
        isProcessing={isProcessing}
        signInError={signInError}
        dismissError={this.dismissError}
      />
    );
  }
}

export default compose(
  connect(null, { startLoading, stopLoading, setUser }),
  withFirebase
)(SignInContainer);
