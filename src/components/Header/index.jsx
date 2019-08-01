import React from 'react';
import AppBar from './AppBar';
import Drawer from './Drawer';

const Header = ({ location }) => {
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
      <AppBar isLanding={isLanding} toggleDrawer={toggleDrawer} />
      <Drawer isOpen={state.isDrawerOpen} toggleDrawer={toggleDrawer} />
    </div>
  );
};

export default Header;
