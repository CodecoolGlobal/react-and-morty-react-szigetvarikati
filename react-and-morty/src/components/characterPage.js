import { useEffect, useState } from "react";

function CharacterPage() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/?page=1')
    .then((response) => response.json())
    .then((data) => setCharacters(data));
  }, [])

  const showCharacter = Array.isArray(characters.results) && characters.results.map((character) => {
    return( <div className="card">
    <h2>{character.name}</h2>
    <p>{character.species}</p>
    <img src={character.image} alt='szia'></img>

  </div>)

  });

  console.log(showCharacter)
  return (
    <div>
      <h1>Characters</h1>
      <ul>
        {showCharacter}
      </ul>
    </div>
  );
}

export default CharacterPage;