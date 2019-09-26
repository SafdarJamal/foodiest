import React from 'react';

import Container from '@material-ui/core/Container';
import Paper from '../../UI/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const Dashboard = () => {
  return (
    <Container style={{ marginTop: 125, width: 600 }}>
      <Paper className="root">
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography
              variant="h1"
              align="center"
              style={{ marginBottom: 20 }}
            >
              Dashboard
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Dashboard;
