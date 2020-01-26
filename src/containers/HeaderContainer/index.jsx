import React, { Component, Fragment } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withFirebase } from '../../services/firebase';
import { withRouter } from 'react-router-dom';
import { startLoading, stopLoading, removeUser } from '../../actions';

import { AppBar } from '../../components/Header';
import { Drawer } from '../../components/Header';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDrawerOpen: false
    };
  }

  toggleDrawer = isDrawerOpen => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    this.setState({ isDrawerOpen });
  };

  render() {
    const {
      location,
      user,
      firebase,
      startLoading,
      stopLoading,
      removeUser
    } = this.props;

    let isLanding = true;
    if (location.pathname !== '/') {
      isLanding = false;
    }

    return (
      <Fragment>
        <AppBar
          isLanding={isLanding}
          toggleDrawer={this.toggleDrawer}
          user={user}
          firebase={firebase}
          startLoading={startLoading}
          stopLoading={stopLoading}
          removeUser={removeUser}
        />
        <Drawer
          user={user}
          isOpen={this.state.isDrawerOpen}
          toggleDrawer={this.toggleDrawer}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default compose(
  connect(mapStateToProps, { startLoading, stopLoading, removeUser }),
  withFirebase,
  withRouter
)(Header);
