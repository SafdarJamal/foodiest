import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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
  const classes = useStyles();
  const [values, setValues] = React.useState({
    inputValue: ''
  });

  const handleChange = propName => event => {
    setValues({ ...values, [propName]: event.target.value });
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="outlined-name"
        label="Name"
        className={classes.textField}
        value={values.inputValue}
        onChange={handleChange('inputValue')}
        margin="normal"
        variant="outlined"
        // error
        fullWidth
        required
        type="text"
        helperText="some important text"
      />
    </form>
  );
};

export default InputField;
