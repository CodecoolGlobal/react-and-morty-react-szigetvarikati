import { useEffect, useState } from "react";
import Button from "./button";

function CharacterPage() {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const url = 'https://rickandmortyapi.com/api/character/?page='
    fetch(`${url}${currentPage}`)
    .then((response) => response.json())
    .then((data) => setCharacters(data));
  }, [currentPage])

  const showCharacter = Array.isArray(characters.results) && characters.results.map((character) => {
    return( <div className="card">
    <h2>{character.name}</h2>
    <p>{character.species}</p>
    <img className="charimg" src={character.image} alt='szia'></img>
    <h6>{character.id}</h6>

  </div>)

  });

  function displayNextPage(){
    if(currentPage)
setCurrentPage(currentPage + 1)
  }
  function displayPrevPage(){
    if(currentPage > 1){
    setCurrentPage(currentPage - 1)
    }
      }

  console.log(showCharacter)
  return (
    <div>
      <div className="pagination">
        <Button text="Previous" onClick={displayPrevPage} />
        <Button text="Next" onClick={displayNextPage} />
      </div>
      <h1>Characters</h1>
      <div className="cardContainer">
        {showCharacter}
      </div>
    </div>
  );
}

export default CharacterPage;