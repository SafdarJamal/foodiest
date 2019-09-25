import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});

const Progress = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LinearProgress color="primary" />
    </div>
  );
};

export default Progress;
