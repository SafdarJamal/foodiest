import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';
import * as USER_TYPES from '../../constants/userTypes';

import Drawer from '@material-ui/core/Drawer';
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

export default props => {
  const { user, isOpen, toggleDrawer } = props;

  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(null);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const publicList = () => {
    const iconList = [<HomeIcon />, <ProfileIcon />, <SignUpIcon />];
    const linkList = [ROUTES.LANDING, ROUTES.SIGNIN, ROUTES.SIGNUP_TYPE];

    return (
      <div
        className={classes.list}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <div
          style={{
            backgroundColor: '#eaeff1',
            padding: 20
          }}
        >
          <Link
            to={ROUTES.LANDING}
            style={{
              textDecoration: 'none',
              cursor: 'pointer'
            }}
          >
            <img
              src={logo}
              alt="Foodiest"
              height="58"
              title="We Love Foodies"
            />
          </Link>
        </div>

        <Divider />

        <List>
          {['Home', 'Sign In', 'Sign Up'].map((text, index) => (
            <Link
              key={text}
              to={linkList[index]}
              style={{
                textDecoration: 'none'
              }}
            >
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
        <div
          style={{
            backgroundColor: '#eaeff1',
            padding: 20
          }}
        >
          <Link
            to={ROUTES.DASHBOARD}
            style={{
              textDecoration: 'none',
              cursor: 'pointer'
            }}
          >
            <img
              src={logo}
              alt="Foodiest"
              height="58"
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
            <Link
              key={text}
              to={linkList[index]}
              style={{
                textDecoration: 'none'
              }}
            >
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
        <div
          style={{
            backgroundColor: '#eaeff1',
            padding: 20
          }}
        >
          <Link
            to={ROUTES.HOME}
            style={{
              textDecoration: 'none',
              cursor: 'pointer'
            }}
          >
            <img
              src={logo}
              alt="Foodiest"
              height="58"
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
            <Link
              key={text}
              to={linkList[index]}
              style={{
                textDecoration: 'none'
              }}
            >
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
      <Drawer open={isOpen} onClose={toggleDrawer(false)}>
        {user
          ? user.type === USER_TYPES.RESTAURATEUR
            ? restaurateurList()
            : foodieList()
          : publicList()}
      </Drawer>
    </div>
  );
};
