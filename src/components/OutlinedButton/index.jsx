import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// const useStyles = makeStyles(theme => ({}));

const OutlinedButton = props => {
  // const classes = useStyles();

  return (
    <Button
      size={props.size}
      variant="outlined"
      color={props.type === 'primary' ? props.type : 'default'}
    >
      {props.text || props.type || 'Default'}
    </Button>
  );
};

export default OutlinedButton;
