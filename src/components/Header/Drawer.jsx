import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import * as USER_TYPES from '../../constants/userTypes';

import DrawerUI from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import logo from '../../assets/images/logo.png';
import { makeStyles } from '@material-ui/core/styles';

// Icons
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/DashboardRounded';
import ProfileIcon from '@material-ui/icons/AccountCircle';
import SignUpIcon from '@material-ui/icons/PersonAdd';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ChatIcon from '@material-ui/icons/Chat';
import SettingIcon from '@material-ui/icons/Settings';

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  }
});

const Drawer = props => {
  const { user, isOpen, toggleDrawer } = props;

  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const publicList = () => {
    const iconList = [<HomeIcon />, <ProfileIcon />, <SignUpIcon />];
    const linkList = [ROUTES.LANDING, ROUTES.SIGNIN, ROUTES.SIGNUP];

    return (
      <div
        className={classes.list}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <div className={styles.drawerTitle}>
          <Link to={ROUTES.LANDING} className={styles.link}>
            <img
              src={logo}
              className={styles.logo}
              alt="Foodiest"
              title="We Love Foodies"
            />
          </Link>
        </div>

        <Divider />

        <List>
          {['Home', 'Sign In', 'Sign Up'].map((text, index) => (
            <Link key={text} to={linkList[index]} className={styles.link}>
              <ListItem
                button
                selected={selectedIndex === index}
                onClick={event => handleListItemClick(event, index)}
              >
                <ListItemIcon>{iconList[index]}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
              {index !== linkList.length - 1 && <Divider />}
            </Link>
          ))}
        </List>
      </div>
    );
  };

  const restaurateurList = () => {
    const iconList = [
      <DashboardIcon />,
      <RestaurantIcon />,
      <ShoppingCartIcon />,
      <ChatIcon />,
      <ProfileIcon />,
      <SettingIcon />
    ];
    const linkList = [
      ROUTES.DASHBOARD,
      ROUTES.DASHBOARD_PRODUCTS,
      ROUTES.DASHBOARD_ORDERS,
      ROUTES.DASHBOARD_CHATS,
      ROUTES.DASHBOARD_PROFILE,
      ROUTES.DASHBOARD_SETTINGS
    ];

    return (
      <div
        className={classes.list}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <div className={styles.drawerTitle}>
          <Link to={ROUTES.DASHBOARD} className={styles.link}>
            <img
              src={logo}
              className={styles.logo}
              alt="Foodiest"
              title="We Love Foodies"
            />
          </Link>
        </div>

        <Divider />

        <List>
          {[
            'Dashboard',
            'Products',
            'Orders',
            'Chats',
            'Profile',
            'Settings'
          ].map((text, index) => (
            <Link key={text} to={linkList[index]} className={styles.link}>
              <ListItem
                button
                selected={selectedIndex === index}
                onClick={event => handleListItemClick(event, index)}
              >
                <ListItemIcon>{iconList[index]}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
              {index !== linkList.length - 1 && <Divider />}
            </Link>
          ))}
        </List>
      </div>
    );
  };

  const foodieList = () => {
    const iconList = [
      <HomeIcon />,
      <RestaurantIcon />,
      <ShoppingCartIcon />,
      <ChatIcon />,
      <ProfileIcon />,
      <SettingIcon />
    ];
    const linkList = [
      ROUTES.HOME,
      ROUTES.HOME_RESTAURANTS,
      ROUTES.HOME_ORDERS,
      ROUTES.HOME_CHATS,
      ROUTES.HOME_PROFILE,
      ROUTES.HOME_SETTINGS
    ];

    return (
      <div
        className={classes.list}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <div className={styles.drawerTitle}>
          <Link to={ROUTES.HOME} className={styles.link}>
            <img
              src={logo}
              className={styles.logo}
              alt="Foodiest"
              title="We Love Foodies"
            />
          </Link>
        </div>

        <Divider />

        <List>
          {[
            'Home',
            'Restuarants',
            'Orders',
            'Chats',
            'Profile',
            'Settings'
          ].map((text, index) => (
            <Link key={text} to={linkList[index]} className={styles.link}>
              <ListItem
                button
                selected={selectedIndex === index}
                onClick={event => handleListItemClick(event, index)}
              >
                <ListItemIcon>{iconList[index]}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
              {index !== linkList.length - 1 && <Divider />}
            </Link>
          ))}
        </List>
      </div>
    );
  };

  return (
    <div>
      <DrawerUI open={isOpen} onClose={toggleDrawer(false)}>
        {user
          ? user.type === USER_TYPES.RESTAURATEUR
            ? restaurateurList()
            : foodieList()
          : publicList()}
      </DrawerUI>
    </div>
  );
};

Drawer.propTypes = {
  user: PropTypes.object,
  isOpen: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired
};

export default Drawer;
