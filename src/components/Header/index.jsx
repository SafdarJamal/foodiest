import React from 'react';
import AppBar from './AppBar';
import Drawer from './Drawer';

const Header = ({ location }) => {
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (side, open) => event => {
    console.log('==>');

    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  let isLanding = true;

  if (location.pathname !== '/') {
    isLanding = false;
  }
  console.log(state.left);

  return (
    <div>
      <AppBar isLanding={isLanding} toggleDrawer={toggleDrawer} />
      <Drawer isOpen={state.left} toggleDrawer={toggleDrawer} />
    </div>
  );
};

export default Header;
