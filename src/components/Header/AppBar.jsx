import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CustomButton from '../UI/CustomButton';
import logo from '../../assets/images/logo.png';

import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  }
}));

export default props => {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" color="default" elevation={2}>
        <Toolbar>
          <Typography style={{ cursor: 'pointer' }} variant="h2" noWrap>
            <Link to="/">
              <img
                src={logo}
                alt="Foodiest"
                height="58"
                title="We Love Foodies"
              />
            </Link>
          </Typography>
          <div className={classes.grow} />
          {props.isLanding && (
            <div className={classes.sectionDesktop}>
              <div className={classes.menuButton}>
                <Link to="/signin" style={{ textDecoration: 'none' }}>
                  <CustomButton
                    variant="outlined"
                    size="large"
                    text="Sign in"
                    type="secondary"
                  />
                </Link>
              </div>
              <Link to="/signup/type" style={{ textDecoration: 'none' }}>
                <CustomButton
                  variant="contained"
                  size="large"
                  text="Sign up"
                  type="primary"
                />
              </Link>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};
