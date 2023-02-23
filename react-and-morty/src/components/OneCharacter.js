import React from "react";

function OneCharacter({ character, onClose }) {
  return (
    <div className="oneChar">
      <div className="oneCharContent">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Name: {character.name}</h2>
        <p>Species: {character.species}</p>
        <p>Status: {character.status}</p>
        <p>Gender: {character.gender}</p>
        <img className="charimg" src={character.image} alt={character.name} />
        <h6>{character.id}</h6>
      </div>
    </div>
  );
}

export default OneCharacter;