import React from "react";
import Button from "./button";

function OneCharacter({ character, onClose, handleKill }) {
  const handleStatusChange = () => {
    handleKill(character);
    onClose();
  };

  return (
    <div className="oneChar">
      <span className="close" onClick={onClose}>
        &times;
      </span>
      <div className="oneCharContent">
        <h2>Name: {character.name}</h2>
        <h4>Species: {character.species}</h4>
        <h4>Status: {character.status}</h4>
        <h4>Gender: {character.gender}</h4>
        <img className="charimg" src={character.image} alt={character.name} />
        <h6>{character.id}</h6>
        {character.status === "Alive" && (
          <Button text="Kill" onClick={handleStatusChange} />
        )}
        {character.status === "Dead" && (
          <Button text="Resurrect" onClick={handleStatusChange} />
        )}
      </div>
    </div>
  );
}
export default OneCharacter;
