import React, { Component, Suspense } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withFirebase } from '../../services/firebase';
import { Loading, SignIn } from '../../actions';

import { ThemeProvider } from '@material-ui/styles';
import theme from '../../theme';

import ErrorBoundaryContainer from '../ErrorBoundaryContainer';
import HeaderContainer from '../HeaderContainer';
import Loader from '../../components/Loader';

import Routes from '../../routes/Routes';
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
        <ErrorBoundaryContainer>
          <HeaderContainer />
          <Suspense
            fallback={
              <div>
                <Loader />
              </div>
            }
          >
            <Routes />
          </Suspense>
        </ErrorBoundaryContainer>
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
