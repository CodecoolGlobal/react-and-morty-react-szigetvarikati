const mongoose = require('mongoose');

const location = new mongoose.Schema({
  "id": Number,
  "name": String,
  "type": String,
  "dimension": String,
})

module.exports = mongoose.model('Location', location);