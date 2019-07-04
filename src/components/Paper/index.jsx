import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import unnamed from '../../assets/images/UberEats.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(5, 3)
  },
  paperContainer: {
    backgroundImage: `url(${unnamed})`,
    height: '560px'
  }
}));

export default props => {
  const classes = useStyles();

  return (
    <div>
      <Paper
        elevation={2}
        className={`${classes[props.class0]} ${classes[props.class1]}`}
      >
        {props.children}
      </Paper>
    </div>
  );
};
