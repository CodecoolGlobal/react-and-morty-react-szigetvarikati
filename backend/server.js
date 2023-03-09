const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const characters = require("./db/character.model");
const locations = require("./db/planet.model");

const mongoUrl = process.env.MongoUrl;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const searchin = (subfolder, key, value, what, number, sortBy) =>
  subfolder
    .find({ [key]: value }, what)
    .limit(number)
    .sort(sortBy)
    .lean();

app.get("/", (req, res) => {
  res.end("OK");
});

app.get("/api/characters", async (req, res) => {
  const allCharactersData = await searchin(characters);
  res.json(allCharactersData);
});

app.get("/api/characters/id/:id", async (req, res) => {
  const characterById = await searchin(characters, "id", req.params.id);
  res.json(characterById[0]);
});

/* app.get('/api/characters/name/:name', async (req, res) => {
  const regex = new RegExp(req.params.name, 'i');
  const characterByName = await characters.findOne({name: regex});
  res.json(characterByName);
}) */

app.get("/api/locations", async (req, res) => {
  const allLocationsData = await searchin(locations);
  res.json(allLocationsData);
});

app.get("/api/locations/id/:id", async (req, res) => {
  const locationById = await searchin(locations, "id", req.params.id);
  res.json(locationById[0]);
});

app.patch("/api/characters/id/:id", async (req, res) => {
  const updatedCharacter = await characters.findOneAndUpdate(
    { id: req.params.id },
    { $set: { status: req.body.status } }
  );
  res.json(updatedCharacter);
});

/* app.get('/api/locations/name/:name', async (req, res) => {
  const regex = new RegExp(req.params.name, 'i');
  const locationByName = await locations.find({name: regex});
  res.json(locationByName);
*/

const main = async () => {
  await mongoose.connect(mongoUrl);
  app.listen(7000);
};
main();
