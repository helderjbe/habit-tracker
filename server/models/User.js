const mongoose = require('mongoose');

const { Schema } = mongoose;

const User = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['normal', 'admin'], required: true },
  level: Number,
  lastUpdate: Date,
  habits: [{ type: Schema.Types.ObjectId, ref: 'Habit' }],
  quests: [{ type: Schema.Types.ObjectId, ref: 'Quest' }]
});

module.exports = mongoose.model('User', User);
