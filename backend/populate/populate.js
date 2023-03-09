require("dotenv").config();
const mongoose = require("mongoose");
const fetch = require('node-fetch')

const CharacterModel = require('../db/character.model');
const PlanetModel = require('../db/planet.model')

const mongoUrl = process.env.MongoUrl



const fetchingCharacter = async () => {
    const allData=[];
    const promises = [...Array(5)].map((_,i) => {
        return fetch(`https://rickandmortyapi.com/api/character/?page=${i+1}`)
        .then(response => response.json())
        .then(data =>  data.results.map(x=> {
            const oneData = {id: x.id, name: x.name, status: x.status, species: x.species, gender: x.gender, location: x.location, image: x.image}
            allData.push(oneData)
}))}
    )

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

const populateCharacter = async () => {
    await CharacterModel.deleteMany()

    const data = await fetchingCharacter()

    await CharacterModel.insertMany(data)
}

const populatePlanet = async () => {
    await PlanetModel.deleteMany()

    const data = await fetchingLocation()

    await PlanetModel.insertMany(data)
}

const main = async () => {
    await mongoose.connect(mongoUrl)

    await populateCharacter()

    await populatePlanet()

    await mongoose.disconnect()
}

main()