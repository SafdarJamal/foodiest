import React from 'react';
import styles from './style.module.css';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import restaurateur from '../../assets/images/restaurateur.jpg';
import foodie from '../../assets/images/foodie.jpg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(5, 3)
  },
  card0: {
    marginRight: theme.spacing(1)
  },
  card1: {
    marginLeft: theme.spacing(1)
  }
}));

const SignUpType = () => {
  const classes = useStyles();

  return (
    <Container className={styles.container}>
      <Paper elevation={2} className={classes.root}>
        <Typography variant="h1" align="center">
          Who is this account for?
        </Typography>
        <br />
        <br />
        <Grid container>
          <Grid item xs={6}>
            <Card className={classes.card0}>
              <CardActionArea>
                <Link to={ROUTES.SIGNUP_RESTAURATEUR} className={styles.link}>
                  <CardMedia
                    component="img"
                    image={restaurateur}
                    className={styles.cardImg}
                    alt="Restaurateur"
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
                <Link to={ROUTES.SIGNUP_FOODIE} className={styles.link}>
                  <CardMedia
                    component="img"
                    image={foodie}
                    className={styles.cardImg}
                    alt="Foodie"
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

export default SignUpType;
