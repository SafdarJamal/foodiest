import React from 'react';
import Button from '@material-ui/core/Button';

const OutlinedButton = props => {
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
