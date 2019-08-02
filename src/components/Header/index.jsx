import React from 'react';
import AppBar from './AppBar';
import Drawer from './Drawer';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { Loading, SignOut as SignOutAction } from '../../actions';
import { withFirebase } from '../../services/firebase';

const Header = props => {
  const { location, user, Loading, firebase, SignOutAction } = props;

  const [state, setState] = React.useState({
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
    <div>
      <AppBar
        user={user}
        isLanding={isLanding}
        toggleDrawer={toggleDrawer}
        Loading={Loading}
        firebase={firebase}
        SignOutAction={SignOutAction}
      />
      <Drawer
        user={user}
        isOpen={state.isDrawerOpen}
        toggleDrawer={toggleDrawer}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return { user: state.auth.user };
};

export default compose(
  connect(
    mapStateToProps,
    { Loading, SignOutAction }
  ),
  withFirebase
)(Header);
