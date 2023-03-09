const CharacterForm = ({ onSave, disabled, character, onCancel }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const entries = [...formData.entries()];

    const character = entries.reduce((acc, entry) => {
      const [k, v] = entry;
      acc[k] = v;
      return acc;
    }, {});

    return onSave(character);
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <h1 className="">Let's create your own character!!!</h1>
      {character && (
        <input type="hidden" name="_id" defaultValue={character._id} />
      )}

      <div className="control">
        <label htmlFor="name">Name:  </label>
        <input
          defaultValue={character ? character.name : null}
          name="name"
          id="name"
        />
      </div>

      <div className="control">
        <label htmlFor="status">Status:  </label>
        <input
          defaultValue={character ? character.status : null}
          name="status"
          id="status"
        />
      </div>

      <div className="control">
        <label htmlFor="species">Species:</label>
        <input
          defaultValue={character ? character.species : null}
          name="species"
          id="species"
        />
      </div>

      <div className="control">
        <label htmlFor="type">Type:</label>
        <input
          defaultValue={character ? character.type : null}
          name="type"
          id="type"
        />
      </div>

      <div className="control">
        <label htmlFor="gender">Gender:</label>
        <input
          defaultValue={character ? character.gender : null}
          name="gender"
          id="gender"
        />
      </div>

      <div className="control">
        <label htmlFor="location">Location:</label>
        <input
          defaultValue={character ? character.location.name : null}
          name="location"
          id="location"
        />
      </div>

      <div className="control">
        <label htmlFor="image">Image:</label>
        <input
          defaultValue={character ? character.image : null}
          name="image"
          id="image"
        />
      </div>

      <div className="formbuttons">
        <button className="button" type="submit" disabled={disabled}>
          {character ? "Update Employee" : "Create Your Character"}
        </button>

        <button className="button" type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default CharacterForm;
