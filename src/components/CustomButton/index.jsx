import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  color: {
    color: 'white'
  }
}));

const CustomButton = props => {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      color={props.type === 'primary' ? props.type : 'default'}
      className={props.type === 'primary' ? classes.color : ''}
      size={props.size}
    >
      {props.text || props.type || 'Default'}
    </Button>
  );
};

export default CustomButton;
