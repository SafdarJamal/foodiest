import React, { Fragment } from 'react';
import styles from './style.module.css';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import SearchBar from '../UI/SearchBar';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Chip from '@material-ui/core/Chip';
import foodie from '../../assets/images/foodie.jpg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(5, 3)
  },
  card: {
    margin: theme.spacing(2)
  }
}));

const Home = props => {
  const classes = useStyles();

  return (
    <Fragment>
      <Container className={styles.container}>
        <Paper elevation={2} className={classes.root}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography variant="h1" className={styles.title}>
                Home
              </Typography>
              <SearchBar placeholder="What are you craving?" />
            </Grid>
          </Grid>
        </Paper>
      </Container>

      <br />

      <Container>
        <Grid container>
          {[
            'LA Breakfast Club',
            `McDonald's®`,
            'Turo Cafe & Grill',
            'Jamba Juice',
            'The Halal Guys',
            'Starbucks®'
          ].map((item, i) => (
            <Grid item xs={4} key={i}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={foodie}
                    className={styles.cardImg}
                    alt="Foodie"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      A foodie is a person who has an ardent or refined interest
                      in food.
                    </Typography>
                    <br />
                    <Chip label="Coffee & Tea" />
                    <Chip label="Burgers" />
                    <Chip label="Fast Food" />
                    <Chip label="Breakfast & Brunch" />
                    <Chip label="Salads" />
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Fragment>
  );
};

export default Home;
