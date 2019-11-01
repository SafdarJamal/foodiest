import React from 'react';
import styles from './style.module.css';

import Container from '@material-ui/core/Container';
import Paper from '../../UI/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import SearchBar from '../../UI/SearchBar';

const Home = props => {
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
              value={props.value}
              onChange={props.onChange}
              onRequestSearch={props.onRequestSearch}
              onCancelSearch={props.onCancelSearch}
            />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Home;
