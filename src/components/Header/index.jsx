import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import logo from '../../assets/images/logo.png';
import CustomButton from '../CustomButton';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  img: {
    cursor: 'pointer'
  },
  button: {
    marginRight: theme.spacing(2)
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar
      elevation={2}
      color="default"
      position="fixed"
      className={classes.root}
    >
      <Toolbar>
        <div className={classes.title}>
          <img
            src={logo}
            className={classes.img}
            alt="Foodiest"
            height="50"
            title="We Love Foodies"
          />
        </div>
        <div className={classes.button}>
          <CustomButton size="large" text="Sign in" type="secondary" />
        </div>
        <CustomButton
          variant="contained"
          size="large"
          text="Sign up"
          type="primary"
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
