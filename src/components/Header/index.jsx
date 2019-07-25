import React from 'react';
import AppBar from './AppBar';

const Header = ({ location }) => {
  let isLanding = true;

  if (location.pathname !== '/') {
    isLanding = false;
  }

  return (
    <div>
      <AppBar isLanding={isLanding} />
    </div>
  );
};

export default Header;
