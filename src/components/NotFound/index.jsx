import React from 'react';
import styles from './style.module.css';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

import Container from '@material-ui/core/Container';
import Paper from '../UI/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CustomButton from '../UI/CustomButton';
import ghostImg from '../../assets/images/ghost.png';

const NotFound = () => {
  return (
    <Container className={styles.container} style={{ width: 600 }}>
      <Paper className="root">
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
              <CustomButton variant="contained" type="primary" size="large">
                Back to Home
              </CustomButton>
            </Link>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default NotFound;
