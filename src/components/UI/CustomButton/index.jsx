import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const CustomButton = props => {
  const {
    children,
    variant,
    type,
    size,
    onClick,
    disabled,
    disableRipple
  } = props;

  return (
    <Button
      variant={variant}
      color={type}
      size={size}
      onClick={onClick}
      disabled={disabled}
      disableRipple={disableRipple}
    >
      {children}
    </Button>
  );
};

CustomButton.propTypes = {
  children: PropTypes.string.isRequired,
  variant: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  disableRipple: PropTypes.bool
};

CustomButton.defaultProps = {
  variant: 'text',
  type: 'default',
  size: 'small',
  onClick: () => {},
  disabled: false,
  disableRipple: false
};

export default CustomButton;
