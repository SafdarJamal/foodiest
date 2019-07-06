import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from '../../assets/images/logo.png';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

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

const Home = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar
        elevation={2}
        color="default"
        position="fixed"
        className={classes.root}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.title}>
            <img
              src={logo}
              className={classes.img}
              alt="Foodiest"
              height="50"
              title="We Love Foodies"
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Home;
