import React from 'react';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  color: {
    color: 'white'
  }
}));

const theme = createMuiTheme({
  palette: {
    primary: green
  }
});

const PrimaryButton = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" color="primary" className={classes.color}>
        Primary Button
      </Button>
    </ThemeProvider>
  );
};

export default PrimaryButton;
