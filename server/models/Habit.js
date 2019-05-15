const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Habit = new Schema({
  title: {
    type: String
  },
  details: {
    type: String
  },
  frequency: {
    type: String
  },
  failed: {
    type: Boolean
  }
});

module.exports = mongoose.model('Habit', Habit);
