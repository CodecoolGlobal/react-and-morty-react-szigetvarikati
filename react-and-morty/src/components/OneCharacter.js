import React, { useState } from "react";
import Button from "./button";

function OneCharacter({ character, onClose, handleKill, condition , stayAtCurrentPage}) {

  const handleStatusChange = () => {
    handleKill(character);
    onClose(onClose);
    condition(condition)
    stayAtCurrentPage(stayAtCurrentPage)
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
        <h4>Location: {character.location.name}</h4>
        <img className="charimg" src={character.image} alt={character.name} />
        <h6>{character.id}</h6>
        {character.status === "Alive" && (
          <Button text="Kill" className='killbutton' onClick={handleStatusChange} />
        )}
        {character.status === "Dead" && (
          <Button text="Resurrect" className='killbutton' onClick={handleStatusChange} />
        )}
      </div>
    </div>
  );
}
export default OneCharacter;
