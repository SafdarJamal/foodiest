import React from 'react';
import styles from './style.module.css';

import Container from '@material-ui/core/Container';
import Paper from '../../UI/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
// import InputField from '../../UI/InputField';
import SearchBar from '../../UI/SearchBar';

const Home = () => {
  const setSearchInput = value => {
    console.log(value);
  };

  const search = value => {
    console.log(value);
  };

  return (
    <Container className={styles.container}>
      <Paper className="root">
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography variant="h1" className={styles.title}>
              Home
            </Typography>
            {/* <InputField focus={false} label="What are you craving?" /> */}
            <SearchBar onChange={setSearchInput} onRequestSearch={search} />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Home;
