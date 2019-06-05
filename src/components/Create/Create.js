import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import axios from 'axios';

class CreateHabit extends Component {
  state = {
    title: '',
    details: '',
    recurrence: '', // days of the week - every x days
    parent: ''
  };

  onChangeState = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  onSubmit = event => {
    const { title, details, recurrence, parent } = this.state;

    event.preventDefault();

    const newObj = {
      title,
      details,
      recurrence,
      parent
    };

    axios
      .post(`${process.env.REACT_APP_API}/habits/add`, newObj)
      .then(res => console.log(res.data));

    this.setState({
      title: '',
      details: '',
      recurrence: '',
      parent: ''
    });
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
          Create
        </Button>
      </form>
    );
  }
}

export default CreateHabit;
