const mongoose = require('mongoose');

const { Schema } = mongoose;

const User = new Schema({
  username: String,
  password: String,
  role: { type: String, enum: ['normal', 'admin'] },
  level: Number,
  lastUpdate: Date,
  habits: [{ type: Schema.Types.ObjectId, ref: 'Habit' }],
  quests: [{ type: Schema.Types.ObjectId, ref: 'Quest' }]
});

module.exports = mongoose.model('User', User);
