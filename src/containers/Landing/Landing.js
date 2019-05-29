import React from 'react';

import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  first: {
    margin: '10% auto 0 auto',
    textStroke: '1px #111'
  }
});

const Landing = props => {
  const { classes } = props;

  return (
    <>
      <Typography component="div">
        <Box
          className={classes.first}
          textAlign="center"
          fontWeight="fontWeightMedium"
          fontSize="h4.fontSize"
          color="#f0f0f0"
        >
          Tell me, what is it that you care most?
        </Box>
      </Typography>
    </>
  );
};

Landing.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired
};

export default withStyles(styles)(Landing);
