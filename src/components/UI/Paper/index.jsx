import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(5, 3)
  }
}));

export default props => {
  const classes = useStyles();

  const { children, class0 } = props;

  return (
    <div>
      <Paper elevation={2} className={classes[class0]}>
        {children}
      </Paper>
    </div>
  );
};
