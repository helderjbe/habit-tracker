import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: '1.75rem'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

function ButtonAppBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <div className={classes.title}>
            <ButtonBase component={Link} to="/">
              <Typography variant="h6">Habit Tracker</Typography>
            </ButtonBase>
          </div>

          <Button component={Link} to="/" color="inherit">
            List
          </Button>
          <Button component={Link} to="/create" color="inherit">
            Create habit
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default ButtonAppBar;
