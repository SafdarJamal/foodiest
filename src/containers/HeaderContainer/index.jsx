import React, { Component, Fragment } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withFirebase } from '../../services/firebase';
import { withRouter } from 'react-router-dom';
import { Loading, SignOut } from '../../actions';

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
    const { location, user, Loading, firebase, SignOut } = this.props;

    let isLanding = true;
    if (location.pathname !== '/') {
      isLanding = false;
    }

    return (
      <Fragment>
        <AppBar
          user={user}
          isLanding={isLanding}
          toggleDrawer={this.toggleDrawer}
          Loading={Loading}
          firebase={firebase}
          SignOut={SignOut}
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
  return { user: state.auth.user };
};

export default compose(
  connect(
    mapStateToProps,
    { Loading, SignOut }
  ),
  withFirebase,
  withRouter
)(Header);
