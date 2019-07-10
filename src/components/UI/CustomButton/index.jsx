import React from 'react';
import Button from '@material-ui/core/Button';

const CustomButton = props => {
  return (
    <Button
      variant={props.variant}
      color={props.type === 'primary' ? props.type : 'default'}
      size={props.size}
      onClick={props.clickMethod}
      disabled={props.disabled}
      disableRipple={props.disableRipple}
    >
      {props.text || props.type || 'Default'}
    </Button>
  );
};

export default CustomButton;
