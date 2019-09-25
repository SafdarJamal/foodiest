import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import CustomButton from '../UI/CustomButton';
import Grid from '@material-ui/core/Grid';
import heroImage from '../../assets/images/eats.jpg';

import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const Landing = props => {
  return (
    <Container style={{ marginTop: 125 }}>
      <Paper elevation={2} style={{ height: 650 }}>
        <Grid container>
          <Grid item xs={4} style={{ marginLeft: 25 }}>
            <Typography variant="h1" style={{ marginTop: 150 }}>
              Foodiest is the easy way to get the food you love delivered.
            </Typography>
            <Typography variant="subtitle1" style={{ marginTop: 50 }}>
              Find food you love from local restaurants and chain favorites
            </Typography>

            <br />
            <Link to={ROUTES.SIGNUP_TYPE} style={{ textDecoration: 'none' }}>
              <CustomButton variant="contained" type="primary" size="large">
                Get Started
              </CustomButton>
            </Link>
          </Grid>
          <Grid item xs={7}>
            <img src={heroImage} alt="BurgerImage" height="650" width="111%" />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Landing;
