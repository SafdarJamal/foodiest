import React from 'react';
import AppBar from './AppBar';

const Header = props => {
  return (
    <div>
      <AppBar isLanding={props.isLanding} />
    </div>
  );
};

export default Header;
