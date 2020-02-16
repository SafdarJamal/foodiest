import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withFirebase } from '../../services/firebase';
import { withRouter } from 'react-router-dom';
import { startLoading, stopLoading, setUser } from '../../actions';
import * as ROUTES from '../../constants/routes';
import * as USER_TYPES from '../../constants/userTypes';
import {
  validateName,
  validateEmail,
  validatePassword,
  validateSignUpForm
} from '../../utils/validate';

import SignUp from '../../components/SignUp';

class SignUpContainer extends Component {
  constructor(props) {
    super(props);

    this._type = null;

    switch (props.location.pathname) {
      case ROUTES.SIGNUP_RESTAURATEUR:
        this.type = USER_TYPES.RESTAURATEUR;
        break;
      case ROUTES.SIGNUP_FOODIE:
        this.type = USER_TYPES.FOODIE;
        break;
      default:
        break;
    }

    this._isMounted = false;

    this.state = {
      fName: null,
      lName: null,
      email: null,
      password: null,
      fNameError: null,
      lNameError: null,
      emailError: null,
      passwordError: null,
      confirmPasswordError: null,
      isProcessing: false,
      signUpError: null
    };

    this.validateFName = this.validateFName.bind(this);
    this.validateLName = this.validateLName.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.confirmPassword = this.confirmPassword.bind(this);
    this.signMeUp = this.signMeUp.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  validateFName(value) {
    const result = validateName(value);
    // console.log(result);

    if (result.isValid !== true) {
      this.setState({ fNameError: result.message });
    } else {
      this.setState({ fNameError: null, fName: value });
    }
  }

  validateLName(value) {
    const result = validateName(value);
    // console.log(result);

    if (result.isValid !== true) {
      this.setState({ lNameError: result.message });
    } else {
      this.setState({ lNameError: null, lName: value });
    }
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

  confirmPassword(value) {
    const { password } = this.state;

    if (value !== password) {
      this.setState({ confirmPasswordError: `Passwords didn't match !` });
    } else {
      this.setState({ confirmPasswordError: null });
    }
  }

  signMeUp() {
    this.setState({ isProcessing: true });

    const result = validateSignUpForm();
    // console.log(result);

    let fName = true;
    let fNameError = null;

    let lName = true;
    let lNameError = null;

    let email = true;
    let emailError = null;

    let password = true;
    let passwordError = null;

    let confirmPassword = true;
    let confirmPasswordError = null;

    if (result.fName.isValid !== true) {
      fName = false;
      fNameError = result.fName.message;
    }
    if (result.lName.isValid !== true) {
      lName = false;
      lNameError = result.lName.message;
    }
    if (result.email.isValid !== true) {
      email = false;
      emailError = result.email.message;
    }
    if (result.password.isValid !== true) {
      password = false;
      passwordError = result.password.message;
    }
    if (
      result.confirmPassword.isValid !== true &&
      result.confirmPassword.isValid !== undefined
    ) {
      confirmPassword = false;
      confirmPasswordError = result.confirmPassword.message;
    }

    if (
      fName === false ||
      lName === false ||
      email === false ||
      password === false ||
      confirmPassword === false
    ) {
      this.setState({
        fNameError,
        lNameError,
        emailError,
        passwordError,
        confirmPasswordError,
        isProcessing: false
      });
      return false;
    }

    // console.log(this.state.email, this.state.password);

    setTimeout(() => {
      const { firebase, startLoading, stopLoading, setUser } = this.props;
      const { fName, lName, email, password } = this.state;

      firebase
        .signUp(email, password)
        .then(success => {
          const user = success.user;
          // console.log(user);

          const userData = {
            fName,
            lName,
            email,
            type: this._type
          };

          return firebase.addUser(user.uid, userData);
        })
        .then(() => firebase.sendEmailVerification())
        .then(() => {
          if (this._isMounted) {
            this.setState({
              fName: null,
              lName: null,
              email: null,
              password: null,
              signUpError: null,
              isProcessing: false
            });
          }

          startLoading();

          return firebase.getUser(firebase.auth.currentUser.uid);
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
            signUpError: errorMessage
          });
        });
    }, 3000);
  }

  dismissError() {
    this.setState({ signUpError: null });
  }

  render() {
    const {
      fNameError,
      lNameError,
      emailError,
      passwordError,
      confirmPasswordError,
      isProcessing,
      signUpError
    } = this.state;

    return (
      <SignUp
        validateFName={this.validateFName}
        validateLName={this.validateLName}
        validateEmail={this.validateEmail}
        validatePassword={this.validatePassword}
        confirmPassword={this.confirmPassword}
        signMeUp={this.signMeUp}
        fNameError={fNameError}
        lNameError={lNameError}
        emailError={emailError}
        passwordError={passwordError}
        confirmPasswordError={confirmPasswordError}
        isProcessing={isProcessing}
        signUpError={signUpError}
        dismissError={this.dismissError}
      />
    );
  }
}

export default compose(
  connect(null, { startLoading, stopLoading, setUser }),
  withFirebase,
  withRouter
)(SignUpContainer);
