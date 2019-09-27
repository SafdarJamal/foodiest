import React, { Fragment, useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withFirebase } from '../../services/firebase';
import { Loading, SignOut } from '../../actions';

import AppBar from './AppBar';
import Drawer from './Drawer';

const Header = props => {
  const { location, user, Loading, firebase, SignOut } = props;

  const [state, setState] = useState({
    isDrawerOpen: false
  });

  let isLanding = true;

  if (location.pathname !== '/') {
    isLanding = false;
  }

  const toggleDrawer = isDrawerOpen => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, isDrawerOpen });
  };

  return (
    <Fragment>
      <AppBar
        user={user}
        isLanding={isLanding}
        toggleDrawer={toggleDrawer}
        Loading={Loading}
        firebase={firebase}
        SignOut={SignOut}
      />
      <Drawer
        user={user}
        isOpen={state.isDrawerOpen}
        toggleDrawer={toggleDrawer}
      />
    </Fragment>
  );
};

const mapStateToProps = state => {
  return { user: state.auth.user };
};

export default compose(
  connect(
    mapStateToProps,
    { Loading, SignOut }
  ),
  withFirebase
)(Header);
