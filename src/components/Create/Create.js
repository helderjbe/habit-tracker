import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import axios from 'axios';

export default class CreateHabit extends Component {
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
    event.preventDefault();

    console.log(`Form submitted:`);
    console.log(`title: ${this.state.title}`);
    console.log(`details: ${this.state.details}`);
    console.log(`frequency: ${this.state.frequency}`);

    const newTodo = {
      title: this.state.title,
      details: this.state.details,
      frequency: this.state.frequency,
      failed: this.state.failed
    };

    axios
      .post('http://localhost:4000/habits/add', newTodo)
      .then(res => console.log(res.data));

    this.setState({
      title: '',
      details: '',
      frequency: '',
      failed: false
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <TextField
          required
          id="title"
          label="Habit"
          value={this.state.title}
          onChange={this.onChangeState}
        />
        <TextField
          required
          id="details"
          label="Details"
          value={this.state.details}
          onChange={this.onChangeState}
        />
        <TextField
          required
          id="frequency"
          label="Frequency"
          value={this.state.frequency}
          onChange={this.onChangeState}
        />
        <Button type="submit" variant="contained" color="primary">
          Create
        </Button>
      </form>
    );
  }
}
