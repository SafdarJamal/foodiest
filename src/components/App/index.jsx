import React, { Component, Suspense } from 'react';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { Loading, SignIn } from '../../actions';
import { withFirebase } from '../../services/firebase';

import { ThemeProvider } from '@material-ui/styles';
import theme from '../../theme';
import ErrorBoundary from '../ErrorBoundary';

import { Route } from 'react-router-dom';
import Routes from '../../routes';

import Header from '../Header';
import Loader from '../Loader';

import { authStateObserver } from '../../utils/authStateObserver';

class App extends Component {
  componentDidMount() {
    const { firebase, Loading, SignIn } = this.props;
    authStateObserver(firebase, Loading, SignIn);
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
            <Routes />
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
    { Loading, SignIn }
  ),
  withFirebase
)(App);
