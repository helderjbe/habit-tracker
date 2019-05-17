import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import axios from 'axios';

class CreateHabit extends Component {
  state = {
    title: '',
    details: '',
    frequency: '',
    failed: false
  };

  onChangeState = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  onSubmit = event => {
    const { title, details, frequency, failed } = this.state;

    event.preventDefault();

    console.log(`Form submitted:`);
    console.log(`title: ${title}`);
    console.log(`details: ${details}`);
    console.log(`frequency: ${frequency}`);

    const newTodo = {
      title,
      details,
      frequency,
      failed
    };

    axios.post('http://localhost:4000/habits/add', newTodo).then(res => console.log(res.data));

    this.setState({
      title: '',
      details: '',
      frequency: '',
      failed: false
    });
  };

  render() {
    const { title, details, frequency } = this.state;

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
          id="frequency"
          label="Frequency"
          value={frequency}
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
