import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import SignInIcon from '@material-ui/icons/AccountCircle';
import SignUpIcon from '@material-ui/icons/PersonAdd';
import logo from '../../assets/images/logo.png';

import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  }
});

export default props => {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(null);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const iconList = [<HomeIcon />, <SignInIcon />, <SignUpIcon />];
  const linkList = ['/', '/signin', '/signup/type'];

  const sideList = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={props.toggleDrawer(false)}
      onKeyDown={props.toggleDrawer(false)}
    >
      <div style={{ backgroundColor: '#eaeff1', padding: 20 }}>
        <Link to="/" style={{ textDecoration: 'none', cursor: 'pointer' }}>
          <img src={logo} alt="Foodiest" height="58" title="We Love Foodies" />
        </Link>
      </div>

      <Divider />

      <List>
        {['Home', 'Sign In', 'Sign Up'].map((text, index) => (
          <Link
            key={text}
            to={linkList[index]}
            style={{ textDecoration: 'none' }}
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

  return (
    <div>
      <Drawer open={props.isOpen} onClose={props.toggleDrawer(false)}>
        {sideList()}
      </Drawer>
    </div>
  );
};
