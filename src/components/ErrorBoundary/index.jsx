import React from 'react';
import styles from './style.module.css';

import Container from '@material-ui/core/Container';
import Paper from '../UI/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CustomButton from '../UI/CustomButton';
import boatLeakImg from '../../assets/images/boat-leak.png';

const ErrorBoundary = () => {
  return (
    <Container className={styles.container} style={{ width: 600 }}>
      <Paper className="root">
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
            <CustomButton
              variant="contained"
              type="primary"
              size="large"
              onClick={() => window.location.reload()}
            >
              Reload this Page
            </CustomButton>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default ErrorBoundary;
