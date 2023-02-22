import { useState } from "react";
import { useCharacters } from "../api/useData";
import Card from "./card";

function CharacterPage() {
  const characters = useCharacters(1);
  
 
  if (characters === null) {
    return "Loading..."
  }
  console.log("Nemtommmiiiiii");
  console.log(characters.results);
  
  return (
    <div>

      <Card />
    </div>
  )
}

export default CharacterPage;