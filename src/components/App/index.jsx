import React, { Component, Suspense } from 'react';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { Loading, SignIn as SignInAction } from '../../actions';
import { withFirebase } from '../../services/firebase';

import { ThemeProvider } from '@material-ui/styles';
import theme from '../../theme';
import ErrorBoundary from '../ErrorBoundary';

import { Switch, Route } from 'react-router-dom';
import Routes from '../../routes';

import Header from '../Header';
import Loader from '../Loader';

class App extends Component {
  componentDidMount() {
    const { firebase, SignInAction, Loading } = this.props;
    // console.log(this.props);

    const unsubscribe = firebase.auth.onAuthStateChanged(user => {
      if (user) {
        unsubscribe();

        return firebase
          .getUser(user.uid)
          .then(querySnapshot => {
            // console.log(querySnapshot.data());

            const userData = querySnapshot.data();
            userData.uid = user.uid;
            userData.isVerified = user.emailVerified;

            SignInAction(userData);
          })
          .then(() => {
            Loading({ isLoading: false });
          })
          .catch(error => {
            const errorMessage = error.message;
            console.log(errorMessage);
          });
      } else {
        unsubscribe();

        this.props.Loading({ isLoading: false });
      }
    });
  }

  render() {
    const { isLoading, user } = this.props;
    console.log(user);

    if (isLoading) {
      return (
        <ThemeProvider theme={theme}>
          <Loader />;
        </ThemeProvider>
      );
    }

    return (
      <ThemeProvider theme={theme}>
        <ErrorBoundary>
          {!user && <Route component={Header} />}

          <Suspense
            fallback={
              <div>
                <Loader />
              </div>
            }
          >
            <Switch>
              <Routes />
            </Switch>
          </Suspense>
        </ErrorBoundary>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = state => {
  return { isLoading: state.loading.isLoading, user: state.auth.user };
};

export default compose(
  connect(
    mapStateToProps,
    { Loading, SignInAction }
  ),
  withFirebase
)(App);
