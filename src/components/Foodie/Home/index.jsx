import React from 'react';
import styles from './style.module.css';

import Container from '@material-ui/core/Container';
import Paper from '../../UI/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const Home = () => {
  return (
    <Container className={styles.container}>
      <Paper className="root">
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography variant="h1" className={styles.title}>
              Home
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Home;
