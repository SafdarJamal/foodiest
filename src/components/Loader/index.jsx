import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loader = () => {
  return (
    <div style={{ textAlign: 'center', paddingTop: '25%' }}>
      <CircularProgress size={100} />
    </div>
  );
};

export default Loader;
