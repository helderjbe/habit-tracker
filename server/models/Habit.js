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
    type: [String],
    required: true,
    validate: /([0-6])x?/g // follow structure: [0-6] (days of week - 0=monday) or [0-6]x (exery x days 0=1=daily)
  },
  points: Number,
  parent: { type: Schema.Types.ObjectId }
});

module.exports = mongoose.model('Habit', Habit);
