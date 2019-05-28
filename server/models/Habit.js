const mongoose = require('mongoose');

const { Schema } = mongoose;

const Habit = new Schema({
  title: {
    type: String
  },
  details: {
    type: String
  },
  recurrence: {
    type: String
  },
  parent: {
    type: String
  },
  failed: {
    type: Map
  }
});

module.exports = mongoose.model('Habit', Habit);
