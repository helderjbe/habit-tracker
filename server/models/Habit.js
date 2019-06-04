const mongoose = require('mongoose');

const { Schema } = mongoose;

const Habit = new Schema({
  title: {
    type: String,
    required: true
  },
  details: String,
  startDate: {
    type: Date,
    default: new Date()
  },
  recurrence: {
    type: String,
    required: true
  },
  points: Number,
  parent: { type: Schema.Types.ObjectId }
});

module.exports = mongoose.model('Habit', Habit);
