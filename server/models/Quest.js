const mongoose = require('mongoose');

const { Schema } = mongoose;

const Quest = new Schema({
  level: {
    type: Number
  }
});
// TODO
module.exports = mongoose.model('Quest', Quest);
