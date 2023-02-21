import { useState } from "react";
import { useCharacters } from "../api/useData";
import Card from "./card";

function CharacterPage() {
  const characters = useCharacters(1)
  console.log(characters);


  return (
    <div>
      <h2>{characters.results[1].name}</h2>
      <p>{characters.results[1].species}</p>
      <img src={characters.results[1].image} alt='szia'></img>
    </div>
  )
}

export default CharacterPage;