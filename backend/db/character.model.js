const mongoose = require("mongoose");
const CharactersSchema = new mongoose.Schema({
    id: Number,
    name: String,
    status: String,
    species: String,
    gender: String,
    location: {
        name: String
    },
    image: String
})

module.exports = mongoose.model('characters', CharactersSchema)

