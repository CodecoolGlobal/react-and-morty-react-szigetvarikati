import { useEffect, useState } from "react";
import OneCharacter from "./OneCharacter";
import Button from "./button";

function CharacterPage() {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const fetchCharacters = () => {
    const url = "/api/characters";
    fetch(`${url}`)
      .then((response) => response.json())
      .then((data) => setCharacters(data));
  };

  const handleKill = async (character) => {
    const newStatus = character.status === "Alive" ? "Dead" : "Alive";
    try {
      const response = await fetch(`/api/characters/id/${character.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      });
      const data = await response.json();
      console.log(data);
      fetchCharacters();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, [currentPage]);

  const showCharacter =
    Array.isArray(characters) &&
    characters.map((character, index) => {
      return (
        <div
          className="card"
          key={index}
          onClick={() => setSelectedCharacter(character)}
        >
          <h2>{character.name}</h2>
          <p>{character.species}</p>
          <img
            className="charimg"
            src={character.image}
            alt={character.name}
          ></img>
          <h6>{character.id}</h6>
        </div>
      );
    });

  function displayNextPage() {
    if (currentPage < 42) setCurrentPage(currentPage + 1);
  }
  function displayPrevPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  return (
    <div>
      {selectedCharacter && (
        <OneCharacter
          character={selectedCharacter}
          onClose={() => setSelectedCharacter(null)}
          handleKill={handleKill}
        />
      )}
      <div className="pagination">
        <Button
          text="←"
          className="PageChangeButton"
          onClick={displayPrevPage}
        />
        <Button
          text="→"
          className="PageChangeButton"
          onClick={displayNextPage}
        />
      </div>
      <h1>Characters</h1>
      <p>{currentPage} of 42</p>
      <div className="cardContainer">{showCharacter}</div>
    </div>
  );
}

export default CharacterPage;
