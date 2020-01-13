import React, { Component, Suspense } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withFirebase } from '../../services/firebase';
import { stopLoading, setUser } from '../../actions';
import { authStateObserver } from '../../utils/authStateObserver';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../../theme';

import ErrorBoundaryContainer from '../ErrorBoundaryContainer';
import HeaderContainer from '../HeaderContainer';
import Loader from '../../components/UI/Loader';
import Routes from '../../routes';

class App extends Component {
  componentDidMount() {
    const { firebase, stopLoading, setUser } = this.props;
    authStateObserver(firebase, stopLoading, setUser);
  }

  render() {
    const { isLoading, user } = this.props;
    console.log(user);

    if (isLoading) {
      return (
        <ThemeProvider theme={theme}>
          <ErrorBoundaryContainer>
            <Loader />;
          </ErrorBoundaryContainer>
        </ThemeProvider>
      );
    }

    return (
      <ThemeProvider theme={theme}>
        <ErrorBoundaryContainer>
          <HeaderContainer />
          <Suspense fallback={<Loader />}>
            <Routes />
          </Suspense>
        </ErrorBoundaryContainer>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = state => {
  return { isLoading: state.isLoading, user: state.user };
};

export default compose(
  connect(mapStateToProps, { stopLoading, setUser }),
  withFirebase
)(App);
