require("dotenv").config();
const mongoose = require("mongoose");
const fetch = require('node-fetch')

const CharacterModel = require('../db/character.model');
const PlanetModel = require('../db/planet.model')

const mongoUrl = process.env.MongoUrl



const fetchingCharacter = async (locations) => {
    const allData=[];
    const promises = [...Array(5)].map(async (_,i) => {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${i+1}`)
        const data = await response.json();
        // console.log(data);
        for (const x of data.results) {
            const last = (arr) => arr[arr.length-1];
            const locationId = last(x.location.url.split("/"));
            // console.log("finding location", locationId);
            const dbLocation = await PlanetModel.findOne({ id: locationId });
            const oneData = {
                id: x.id,
                name: x.name,
                status: x.status,
                species: x.species,
                gender: x.gender,
                locationId: dbLocation === null ? "" : dbLocation._id,
                image: x.image
            }
            allData.push(oneData)
        }
    });

    await Promise.all(promises)
    return allData}

const fetchingLocation = async () => {
    let allData=[];
   const promises =  [...Array(5)].map((_,i) => {
        return fetch(`https://rickandmortyapi.com/api/location/?page=${i+1}`)
        .then(response => response.json())
        .then(data=> data.results.map(x=> {
            const oneData = {id: x.id, name: x.name, type: x.type, dimension: x.dimension}
            allData.push(oneData)
        }))}
    )

    await Promise.all(promises)
    return allData
}

const populateCharacter = async (locations) => {
    await CharacterModel.deleteMany()

    const data = await fetchingCharacter(locations)

    await CharacterModel.insertMany(data)
}

const populatePlanet = async () => {
    await PlanetModel.deleteMany()

    const data = await fetchingLocation()

    const dbLocations = await PlanetModel.insertMany(data);
    // console.log(dbLocations);
    return dbLocations;
}

const main = async () => {
    await mongoose.connect(mongoUrl)

    const locations = await populatePlanet();
    await populateCharacter(locations);


    await mongoose.disconnect()
}

main()