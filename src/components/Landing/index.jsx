import React from 'react';
import styles from './style.module.css';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

import Container from '@material-ui/core/Container';
import Paper from '../UI/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CustomButton from '../UI/CustomButton';
import heroImg from '../../assets/images/eats.jpg';

const Landing = () => {
  return (
    <Container className={styles.container}>
      <Paper>
        <Grid container>
          <Grid item xs={4} className={styles.titleWrapper}>
            <Typography variant="h1" className={styles.title}>
              Foodiest is the easy way to get the food you love delivered.
            </Typography>
            <Typography variant="subtitle1" className={styles.subTitle}>
              Find food you love from local restaurants and chain favorites
            </Typography>

            <br />
            <Link to={ROUTES.SIGNUP} className={styles.link}>
              <CustomButton variant="contained" type="primary" size="large">
                Get Started
              </CustomButton>
            </Link>
          </Grid>
          <Grid item xs={7}>
            <img src={heroImg} className={styles.heroImg} alt="BurgerImage" />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Landing;
