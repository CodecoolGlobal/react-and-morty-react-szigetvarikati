import React from "react";

function OneCharacter({ character, onClose }) {
  return (
    <div className="oneChar">
      <div className="oneCharContent">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>{character.name}</h2>
        <p>{character.species}</p>
        <p>{character.gender}</p>
        <img className="charimg" src={character.image} alt={character.name} />
        <h6>{character.id}</h6>
      </div>
    </div>
  );
}

export default OneCharacter;