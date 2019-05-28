import React, { Component } from 'react';

import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import axios from 'axios';

class EditHabit extends Component {
  state = {
    title: '',
    details: '',
    recurrence: '',
    parent: ''
  };

  componentDidMount() {
    const { match } = this.props;

    axios
      .get(`http://localhost:4000/habits/${match.params.id}`)
      .then(response => {
        this.setState({
          title: response.data.title || '',
          details: response.data.details || '',
          recurrence: response.data.recurrence || '',
          parent: response.data.parent || ''
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  onChangeState = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  onSubmit = event => {
    const { title, details, recurrence, parent } = this.state;
    const { match, history } = this.props;

    event.preventDefault();

    const updatedObj = {
      title,
      details,
      recurrence,
      parent
    };

    axios
      .post(`http://localhost:4000/habits/update/${match.params.id}`, updatedObj)
      .then(res => console.log(res.data));

    history.push('/');
  };

  render() {
    const { title, details, recurrence } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <TextField required id="title" label="Habit" value={title} onChange={this.onChangeState} />
        <TextField
          required
          id="details"
          label="Details"
          value={details}
          onChange={this.onChangeState}
        />
        <TextField
          required
          id="recurrence"
          label="Recurrence"
          value={recurrence}
          onChange={this.onChangeState}
        />
        <Button type="submit" variant="contained" color="primary">
          Edit
        </Button>
      </form>
    );
  }
}

EditHabit.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
  history: PropTypes.instanceOf(Object).isRequired
};

export default EditHabit;
