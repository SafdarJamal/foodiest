import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountBoxIcon from '@material-ui/icons/AccountCircle';
import NearMeRoundedIcon from '@material-ui/icons/NearMeRounded';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  }
}));

export default props => {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState();

  function handleListItemClick(event, index) {
    setSelectedIndex(index);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={props.isOpen}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>{/* <h1>Hello World</h1> */}</div>
        <Divider />
        <List>
          <ListItem
            button
            selected={selectedIndex === 0}
            onClick={event => handleListItemClick(event, 0)}
          >
            <ListItemIcon>
              <AccountBoxIcon />
            </ListItemIcon>
            <ListItemText primary="Sign In" />
          </ListItem>
          <Divider />
          <ListItem
            button
            selected={selectedIndex === 1}
            onClick={event => handleListItemClick(event, 1)}
          >
            <ListItemIcon>
              <NearMeRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Sign Up" />
          </ListItem>
        </List>
        <Divider />
      </Drawer>
    </div>
  );
};
