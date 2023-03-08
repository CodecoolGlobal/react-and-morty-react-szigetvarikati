const express = require('express');
const db = require('mongodb');
const mongoose = require('mongoose');
const cors = require('cors');
const fs = require('fs')
require('dotenv').config();
const characters = require('./character.schema')
const locations = require('./location.schema')

//itt vmi baja van....
//const pic1 = require("./locations_pic/pic1");

const { urlencoded } = require('express');

const app = express();

app.use(express.json());
app.use(urlencoded({extended: true}));

app.get('/', async (req, res) => {
  res.end("OK");
})

app.get('/api/characters', async (req,res) => {
  const allCharactersData = await characters.find().lean();
  res.json(allCharactersData);
})

app.get('/api/characters/id/:id', async (req, res) => {
  const characterById = await characters.findOne({id: req.params.id});
  res.json(characterById);
})

app.get('/api/characters/name/:name', async (req, res) => {
  const regex = new RegExp(req.params.name, 'i');
  const characterByName = await characters.findOne({name: regex});
  res.json(characterByName);
})

app.get('/api/locations', async (req, res) => {
  const allLocationsData = await locations.find().lean();
  res.json(allLocationsData);
})

app.get('/api/locations/id/:id', async (res, req) => {
  const locationById = await locations.findOne({id: req.params.id});
  res.json(locationById);
})

app.get('/api/locations/name/:name', async (req, res) => {
  const regex = new RegExp(req.params.name, 'i');
  const locationByName = await locations.find({name: regex});
  res.json(locationByName);
})

app.get('/api/picture', async (req, res) => {
  res.end("fbfdbd")
})

const port = process.env?.PORT ?? 7000;

const connectToDb = () => {
  mongoose
  .connect('mongodb://127.0.0.1:27017/5th-TW-project-proba')
  .catch(error => console.error(error))
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is runing on ${port}`);
    });
  })}


  //kiolvasom a fáljból(characterDataFromAPICopy.jsonból) az adatokat
  const readDatas = function (filename) {
    return JSON.parse(fs.readFileSync(filename));
  }

  //feltöltöm a mongoDB adatbázisba a charactereket a kiolvasott adatokkal az 5th-week...-ba
  const insertCharactersFromJsonImport = (filename) => {
    const datasImport = readDatas(filename);
    return characters.insertMany(datasImport);
  }
//feltöltöm a mongoDB adatbázisba a locationokat a kiolvasott adatokkal az 5th-week...-be
  const insertLocationsFromJsonImport = (filename) => {
    const datasImport = readDatas(filename);
    return locations.insertMany(datasImport);
  }

  async function main() {
    connectToDb();
    await insertCharactersFromJsonImport("characterDataFromAPICopy.json");
    await insertLocationsFromJsonImport("locationDataFromAPICopy.json");
  }

  main();
