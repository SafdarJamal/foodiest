import React from 'react';
import styles from './style.module.css';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ghostImg from '../../assets/images/ghost.png';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(5, 3)
  }
}));

const NotFound = () => {
  const classes = useStyles();

  return (
    <Container className={styles.container} style={{ width: 600 }}>
      <Paper elevation={2} className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography variant="h1" className={styles.title}>
              {/* 404 - Not Found */}
              This Page is a Ghost
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <img
              src={ghostImg}
              className={styles.ghostImg}
              alt="Ghost Screen"
            />
          </Grid>
          <Grid item xs={12} className={styles.btnWrapper}>
            <Link to={ROUTES.LANDING} className={styles.link}>
              <Button variant="contained" color="primary" size="large">
                Back to Home
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default NotFound;
