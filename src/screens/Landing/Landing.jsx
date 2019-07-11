import React from 'react';
import Header from '../../components/Header';
import Landing from '../../components/Landing';

export default () => {
  return (
    <div>
      <Header isLanding={true} />
      <Landing />
    </div>
  );
};
