import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '../Paper';
import CustomButton from '../CustomButton';

const Landing = () => {
  return (
    <Container style={{ marginTop: 100 }}>
      <Paper class0="root" class1="paperContainer">
        <Typography variant="h1" style={{ marginTop: 250 }}>
          Foodiest is the easy way to get
          <br />
          the food you love delivered.
        </Typography>
        <Typography variant="subtitle1" style={{ marginTop: 25 }}>
          Find food you love from local restaurants and chain favorites
        </Typography>

        <br />
        <CustomButton
          variant="contained"
          text="Get started"
          type="primary"
          size="large"
        />
      </Paper>
    </Container>
  );
};

export default Landing;
