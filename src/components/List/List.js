import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { Link } from 'react-router-dom';
import axios from 'axios';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto'
  },
  table: {
    minWidth: 650
  }
});

const createData = (title, details, frequency, failed) => {
  return { title, details, frequency, failed };
};

class HabitList extends Component {
  state = {
    habits: []
  };

  componentDidMount() {
    axios
      .get('http://localhost:4000/habits/')
      .then(response => {
        this.setState({ habits: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { classes } = this.props;
    const { habits } = this.state;

    const rows = habits.map(habit =>
      createData(habit.title, habit.details, habit.frequency, habit.failed)
    );

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Habit</TableCell>
              <TableCell align="right">Details</TableCell>
              <TableCell align="right">Recurrence</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.title}>
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell align="right">{row.details}</TableCell>
                <TableCell align="right">{row.frequency}</TableCell>
                <TableCell align="right">{row.failed}</TableCell>
                <TableCell align="right">
                  <Link to={`/edit/${row._id}`}>Edit</Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

HabitList.propTypes = {
  classes: PropTypes.instanceOf(Array).isRequired
};

export default withStyles(styles)(HabitList);
