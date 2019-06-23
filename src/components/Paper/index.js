import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}));

export default props => {
  const classes = useStyles();

  return (
    <div>
      <Paper elevation="2" className={classes.root}>
        {props.children}
      </Paper>
    </div>
  );
};
