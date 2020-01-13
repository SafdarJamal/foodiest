import React from 'react';
import styles from './style.module.css';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import boatLeakImg from '../../assets/images/boat-leak.png';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(5, 3)
  }
}));

const ErrorBoundary = () => {
  const classes = useStyles();

  return (
    <Container className={styles.container} style={{ width: 600 }}>
      <Paper elevation={2} className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography variant="h1" className={styles.title}>
              Something Went Wrong
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <img
              src={boatLeakImg}
              className={styles.boatLeakImg}
              alt="Boat leak Screen"
            />
          </Grid>
          <Grid item xs={12} className={styles.btnWrapper}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => window.location.reload()}
            >
              Reload this Page
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default ErrorBoundary;
