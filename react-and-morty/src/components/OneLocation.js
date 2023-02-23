import React from "react";

function OneLocation({ character, onClose }) {
  return (
    <div className="oneChar">
      <div className="oneCharContent">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Name: {character.name}</h2>
        <h4>Type: {character.type}</h4>
        <h4>Dimension: {character.dimension}</h4>
        <img className="charimg" src={character.img} alt={character.name} />
        <h6>ID: {character.id}</h6>
      </div>
    </div>
  );
}

export default OneLocation;