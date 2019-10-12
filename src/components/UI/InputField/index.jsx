import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  }
}));

const InputField = props => {
  const {
    focus,
    label,
    type,
    helperText,
    required,
    errorMessage,
    disabled
  } = props;

  const classes = useStyles();
  const [values, setValues] = useState({
    inputValue: ''
  });

  const handleChange = propName => event => {
    setValues({ ...values, [propName]: event.target.value });
    props.validate(event.target.value);
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  return (
    <div className={classes.container}>
      <TextField
        autoFocus={focus}
        id={label.toLowerCase().replace(/ /g, '-')}
        label={label}
        className={classes.textField}
        value={values.inputValue}
        onChange={handleChange('inputValue')}
        margin="normal"
        variant="outlined"
        fullWidth
        type={values.showPassword ? 'text' : type}
        InputProps={
          type === 'password'
            ? {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      aria-label="Toggle password visibility"
                      onClick={handleClickShowPassword}
                    >
                      {values.showPassword ? (
                        <Tooltip title="Hide password">
                          <Visibility />
                        </Tooltip>
                      ) : (
                        <Tooltip title="Show password">
                          <VisibilityOff />
                        </Tooltip>
                      )}
                    </IconButton>
                  </InputAdornment>
                )
              }
            : null
        }
        required={required}
        error={errorMessage ? true : false}
        helperText={errorMessage ? errorMessage : helperText}
        disabled={disabled}
      />
    </div>
  );
};

InputField.propTypes = {
  focus: PropTypes.bool,
  label: PropTypes.string,
  type: PropTypes.string,
  helperText: PropTypes.string,
  required: PropTypes.bool,
  errorMessage: PropTypes.string,
  disabled: PropTypes.bool
};

InputField.defaultProps = {
  focus: false,
  label: '',
  type: 'text',
  helperText: '',
  required: false,
  errorMessage: '',
  disabled: false
};

export default InputField;
