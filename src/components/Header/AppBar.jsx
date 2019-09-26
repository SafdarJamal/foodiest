import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';
import * as USER_TYPES from '../../constants/userTypes';

import AppBarUI from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import logo from '../../assets/images/logo.png';
import CustomButton from '../UI/CustomButton';
import { makeStyles } from '@material-ui/core/styles';

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
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
}));

const AppBar = props => {
  const {
    user,
    isLanding,
    toggleDrawer,
    Loading,
    firebase,
    SignOutAction
  } = props;

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const SignMeOut = () => {
    setAnchorEl(null);
    handleMobileMenuClose();

    Loading({ isLoading: true });

    setTimeout(() => {
      firebase
        .signOut()
        .then(() => {
          SignOutAction();
          Loading({ isLoading: false });
        })
        .catch(error => {
          const errorMessage = error.message;
          console.log(errorMessage);
        });
    }, 3000);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My Account</MenuItem>
      <MenuItem onClick={SignMeOut}>Sign Me Out</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="Show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="Show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="Account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBarUI position="fixed" color="default" elevation={2}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography style={{ cursor: 'pointer' }} variant="h2" noWrap>
            <Link
              to={
                user
                  ? user.type === USER_TYPES.RESTAURATEUR
                    ? ROUTES.DASHBOARD
                    : ROUTES.HOME
                  : ROUTES.LANDING
              }
            >
              <img
                src={logo}
                alt="Foodiest"
                height="58"
                title="We Love Foodies"
              />
            </Link>
          </Typography>
          <div className={classes.grow} />
          {user ? (
            <div>
              <div className={classes.sectionDesktop}>
                <IconButton aria-label="Show 4 new mails" color="inherit">
                  <Badge badgeContent={4} color="secondary">
                    <MailIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  aria-label="Show 17 new notifications"
                  color="inherit"
                >
                  <Badge badgeContent={17} color="secondary">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="Account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </div>
              <div className={classes.sectionMobile}>
                <IconButton
                  aria-label="Show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </div>
            </div>
          ) : (
            <div>
              {isLanding && (
                <div className={classes.sectionDesktop}>
                  <div className={classes.menuButton}>
                    <Link to={ROUTES.SIGNIN} style={{ textDecoration: 'none' }}>
                      <CustomButton
                        variant="outlined"
                        size="large"
                        // type="secondary"
                      >
                        Sign In
                      </CustomButton>
                    </Link>
                  </div>
                  <Link
                    to={ROUTES.SIGNUP_TYPE}
                    style={{ textDecoration: 'none' }}
                  >
                    <CustomButton
                      variant="contained"
                      size="large"
                      type="primary"
                    >
                      Sign Up
                    </CustomButton>
                  </Link>
                </div>
              )}
            </div>
          )}
        </Toolbar>
      </AppBarUI>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
};

export default AppBar;
