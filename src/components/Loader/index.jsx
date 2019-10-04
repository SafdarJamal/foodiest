import React from 'react';
import styles from './style.module.css';

import CircularProgress from '@material-ui/core/CircularProgress';

const Loader = () => {
  return (
    <div className={styles.container}>
      <CircularProgress size={100} />
    </div>
  );
};

export default Loader;
