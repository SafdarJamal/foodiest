import React, { Component } from 'react';
import styles from './style.module.css';

import Container from '@material-ui/core/Container';
import Paper from '../../UI/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import SearchBar from '../../UI/SearchBar';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: ''
    };

    this.setSearchValue = this.setSearchValue.bind(this);
  }

  setSearchValue(searchValue) {
    console.log(searchValue);
    this.setState({ searchValue });
  }

  search(searchValue) {
    console.log(searchValue);
  }

  render() {
    return (
      <Container className={styles.container}>
        <Paper className="root">
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography variant="h1" className={styles.title}>
                Home
              </Typography>
              <SearchBar
                placeholder="What are you craving?"
                value={this.state.searchValue}
                onChange={this.setSearchValue}
                onRequestSearch={this.search}
              />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    );
  }
}

export default Home;
