import { useEffect, useState } from "react";
import OneCharacter from "./OneCharacter";

function CharacterPage() {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCharacter, setSelectedCharacter] = useState(null)

  useEffect(() => {
    const url = 'https://rickandmortyapi.com/api/character/?page='
    fetch(`${url}${currentPage}`)
    .then((response) => response.json())
    .then((data) => setCharacters(data));
  }, [currentPage])

  const showCharacter = Array.isArray(characters.results) && characters.results.map((character,index) => {
    return( <div className="card" key={index} onClick={() => setSelectedCharacter(character)}>
    <h2>{character.name}</h2>
    <p>{character.species}</p>
    <img className="charimg" src={character.image} alt='szia'></img>
    <h6>{character.id}</h6>

  </div>)

  });

  function displayNextPage(){
    if(currentPage < 42)
setCurrentPage(currentPage + 1)
  }
  function displayPrevPage(){
    if(currentPage > 1){
    setCurrentPage(currentPage - 1)
    }
      }
  return (
    <div>
      {selectedCharacter && (
        <OneCharacter character={selectedCharacter} onClose={() => setSelectedCharacter(null)} />
        )}
      <div className="pagination">
        <button className='PageChangeButton' onClick={displayPrevPage}>←</button>
        <button className='PageChangeButton' onClick={displayNextPage}>→</button>
      </div>
      <h1>Characters</h1>
      <div className="cardContainer">
        {showCharacter}
      </div>
    </div>
  );
}

export default CharacterPage;