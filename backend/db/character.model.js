const mongoose = require("mongoose");
const CharactersSchema = new mongoose.Schema({
    id: Number,
    name: String,
    status: String,
    species: String,
    gender: String,
    locationId: String,
    // location:  { type: Schema.Types.ObjectId, ref: 'Person' }
    image: String
})

module.exports = mongoose.model('characters', CharactersSchema)

