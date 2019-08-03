import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '../UI/Paper';
import Typography from '@material-ui/core/Typography';
import CustomButton from '../UI/CustomButton';
import Grid from '@material-ui/core/Grid';
import ghostImg from '../../assets/images/ghost.png';

import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const NotFound = () => {
  return (
    <Container style={{ marginTop: 125, width: 600 }}>
      <Paper class0="root">
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography
              variant="h1"
              align="center"
              style={{ marginBottom: 20 }}
            >
              {/* 404 - Not Found */}
              This Page is a Ghost
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <img src={ghostImg} width="100%" height="400" alt="Ghost Screen" />
          </Grid>
          <Grid item xs={12} style={{ marginTop: 25, textAlign: 'center' }}>
            <Link to={ROUTES.LANDING} style={{ textDecoration: 'none' }}>
              <CustomButton
                variant="contained"
                type="primary"
                text="Back to home"
                size="large"
              />
            </Link>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default NotFound;
