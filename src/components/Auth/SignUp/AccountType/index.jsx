import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '../../../UI/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import restaurateur from '../../../../assets/images/restaurateur.jpg';
import foodie from '../../../../assets/images/foodie.jpg';

import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  card0: {
    marginRight: theme.spacing(1)
  },
  card1: {
    marginLeft: theme.spacing(1)
  }
}));

const AccountType = () => {
  const classes = useStyles();

  return (
    <Container style={{ marginTop: 100, width: 600 }}>
      <Paper class0="root">
        <Typography variant="h1" align="center">
          Who is this account for?
        </Typography>
        <br />
        <br />
        <Grid container>
          <Grid item xs={6}>
            <Card className={classes.card0}>
              <CardActionArea>
                <Link
                  to="/signup/restaurateur"
                  style={{ textDecoration: 'none' }}
                >
                  <CardMedia
                    component="img"
                    alt="Restaurateur"
                    height="150"
                    image={restaurateur}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Restaurateur
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      A restaurateur is a person who opens and runs restaurants
                      professionally.
                    </Typography>
                  </CardContent>
                </Link>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card className={classes.card1}>
              <CardActionArea>
                <Link to="/signup/foodie" style={{ textDecoration: 'none' }}>
                  <CardMedia
                    component="img"
                    alt="Foodie"
                    height="150"
                    image={foodie}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Foodie
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      A foodie is a person who has an ardent or refined interest
                      in food.
                    </Typography>
                  </CardContent>
                </Link>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
        <br />
      </Paper>
    </Container>
  );
};

export default AccountType;
