import React from 'react';
import AppBar from './AppBar';
import Drawer from './Drawer';

const Header = () => {
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
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
        isOpen={open}
      />
      <Drawer isOpen={open} />
    </div>
  );
};

export default Header;
