import React from 'react';
import Button from '@material-ui/core/Button';

const CustomButton = props => {
  return (
    <Button
      variant={props.variant}
      color={props.type === 'primary' ? props.type : 'default'}
      size={props.size}
    >
      {props.text || props.type || 'Default'}
    </Button>
  );
};

export default CustomButton;
