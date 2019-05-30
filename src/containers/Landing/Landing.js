import React from 'react';

import PropTypes from 'prop-types';

import classNames from 'classnames';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Favorite from '@material-ui/icons/Favorite';
import Public from '@material-ui/icons/Public';
import { withStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import grey from '@material-ui/core/colors/grey';

const styles = theme => ({
  first: {
    margin: '7.5% auto 0 auto',
    display: 'inline-block',
    textShadow: '4px 4px 5px #000000'
  },
  rightIcon: {
    marginLeft: theme.spacing(1.5),
    width: '1.15em',
    height: '1.15em'
  },
  button: {
    padding: theme.spacing(2),
    fontSize: '1.25em',
    borderRadius: 10,
    marginTop: theme.spacing(2)
  },
  overline: {
    color: 'white',
    fontWeight: '400',
    textShadow: '2px 2px 2px #000000'
  },
  skip: {
    float: 'right'
  }
});

const Landing = props => {
  const { classes } = props;

  return (
    <Container>
      <div>
        <Button size="small" className={classes.overline}>
          Sign In
        </Button>
        <Button size="small" className={classNames(classes.overline, classes.skip)}>
          Skip...
        </Button>
      </div>
      <Typography component="div">
        <Box
          className={classes.first}
          textAlign="center"
          fontWeight="fontWeightMedium"
          fontSize="h3.fontSize"
          color="white"
          p={2}
        >
          What is most important to you?
        </Box>
      </Typography>
      <Button
        variant="contained"
        size="large"
        style={{
          backgroundColor: red.A400
        }}
        className={classes.button}
        fullWidth
      >
        Health
        <Favorite className={classes.rightIcon} />
      </Button>
      <Button
        variant="contained"
        size="large"
        style={{
          backgroundColor: blue.A400
        }}
        className={classes.button}
        fullWidth
      >
        Purpose
        <Public className={classes.rightIcon} />
      </Button>
      <Button
        variant="contained"
        size="large"
        style={{
          backgroundColor: grey[500]
        }}
        className={classes.button}
        fullWidth
      >
        Other
      </Button>
    </Container>
  );
};

Landing.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired
};

export default withStyles(styles)(Landing);
