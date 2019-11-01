import React, { Component } from 'react';

import Home from '../../components/Foodie/Home';

class HomeContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: ''
    };

    this.setSearchValue = this.setSearchValue.bind(this);
    this.cancelSearch = this.cancelSearch.bind(this);
  }

  setSearchValue(searchValue) {
    console.log(searchValue);
    this.setState({ searchValue });
  }

  search(searchValue) {
    console.log(searchValue);
  }

  cancelSearch() {
    this.setState({ searchValue: '' });
  }

  render() {
    return (
      <Home
        value={this.state.searchValue}
        onChange={this.setSearchValue}
        onRequestSearch={this.search}
        onCancelSearch={this.cancelSearch}
      />
    );
  }
}

export default HomeContainer;
