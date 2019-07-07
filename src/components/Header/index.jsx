import React from 'react';
import AppBar from './AppBar';
import Drawer from './Drawer';

const Header = props => {
  const [open, setOpen] = React.useState(false);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  return (
    <div>
      <AppBar
        isLanding={props.isLanding}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
        isOpen={open}
      />
      <Drawer isOpen={open} />
    </div>
  );
};

export default Header;
