import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  color: {
    // color: 'white'
  }
}));

const OutlinedButton = props => {
  const classes = useStyles();

  return (
    <Button
      variant="outlined"
      color={props.type === 'primary' ? props.type : 'default'}
      className={props.type === 'primary' ? classes.color : ''}
    >
      {props.text || props.type || 'Default'}
    </Button>
  );
};

export default OutlinedButton;
