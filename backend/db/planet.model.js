const mongoose = require("mongoose");

const PlanetSchema = new mongoose.Schema({
    id: Number,
    name: String,
    type: String,
    dimension: String,
})

module.exports = mongoose.model('planets', PlanetSchema)

