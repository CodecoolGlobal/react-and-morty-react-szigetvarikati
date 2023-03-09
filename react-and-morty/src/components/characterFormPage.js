import { useState } from "react";

const CharacterForm = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    const character = {
      name: name,
      status: status,
      species: species,
      type: type,
      gender: gender,
      location: {name: location},
      image: image
    }

    handleCreateCharacter(character);
    setName("");
    setStatus("");
    setSpecies("");
    setType("");
    setGender("");
    setLocation("");
    setImage("");
  };

  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [species, setSpecies] = useState("");
  const [type, setType] = useState("");
  const [gender, setGender] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");

  const [data, setData] = useState(null);

  const handleCreateCharacter = (character) => {
    fetch('/api/characters', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(character)
    })
      .then((res) => res.json())
      .then((character) => {
        setData(character);
      })
  };

  return (
    <>
      <form className="form" onSubmit={onSubmit}>
        <h1 className="">Let's create your own character!!!</h1>
        <div className="control">
          <label htmlFor="name">Name:  </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            id="name"
          />
        </div>

        <div className="control">
          <label htmlFor="status">Status:  </label>
          <input
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            type="text"
            name="status"
            id="status"
          />
        </div>

        <div className="control">
          <label htmlFor="species">Species:</label>
          <input
            value={species}
            onChange={(e) => setSpecies(e.target.value)}
            type="text"
            name="species"
            id="species"
          />
        </div>

        <div className="control">
          <label htmlFor="gender">Gender:</label>
          <input
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            type="text"
            name="species"
            id="species"
          />
        </div>

        <div className="control">
          <label htmlFor="location">Location:</label>
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            type="text"
            name="species"
            id="species"
          />
        </div>

        <div className="control">
          <label htmlFor="image">Image:</label>
          <input
            value={image}
            onChange={(e) => setImage(e.target.value)}
            type="text"
            name="image"
            id="image"
          />
        </div>

        <div className="formbuttons">
          <button className="button" type="submit">
            Create Your Character
          </button>
        </div>
      </form>
      {data
        ? <div className="oneChar">
        <div className="oneCharContent">
          <h2>Name: {data.name}</h2>
          <h4>Species: {data.species}</h4>
          <h4>Status: {data.status}</h4>
          <h4>Gender: {data.gender}</h4>
          <h4>Location: {data.location.name}</h4>
          <img className="charimg" src={data.image} alt={data.name} />
        </div>
      </div>
        : null}
    </>
  );
};

export default CharacterForm;
