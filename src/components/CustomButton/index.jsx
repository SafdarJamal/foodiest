import React from 'react';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import { green, lightBlue } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  color: {
    color: 'white'
  }
}));

const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: lightBlue
  }
});

const CustomButton = props => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Button
        variant="contained"
        color={props.type || 'primary'}
        className={classes.color}
      >
        {props.text || props.type}
      </Button>
    </ThemeProvider>
  );
};

export default CustomButton;
