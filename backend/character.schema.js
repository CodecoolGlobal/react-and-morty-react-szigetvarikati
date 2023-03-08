const mongoose = require('mongoose');

const character = new mongoose.Schema({
  "id": Number,
  "name": String,
  "status": String,
  "species": String,
  "type": String,
  "gender": String,
  "location": {
    "name": String,
  },
  "image": String
})


module.exports = mongoose.model('Character', character);
