const mongoose = require('mongoose');

const { Schema } = mongoose;

const Quest = new Schema({
  title: {
    type: String,
    required: true
  },
  details: String
});
module.exports = mongoose.model('Quest', Quest);
