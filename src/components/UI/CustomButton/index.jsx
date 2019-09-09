import React from 'react';
import Button from '@material-ui/core/Button';

const CustomButton = props => {
  const { variant, type, text, size, onClick, disabled, disableRipple } = props;

  return (
    <Button
      variant={variant}
      color={type === 'primary' ? type : 'default'}
      size={size}
      onClick={onClick}
      disabled={disabled}
      disableRipple={disableRipple}
    >
      {text || type || 'Default'}
    </Button>
  );
};

export default CustomButton;
