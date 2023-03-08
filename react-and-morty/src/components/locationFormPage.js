const LocationForm = ({ onSave, disabled, location, onCancel }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const entries = [...formData.entries()];

    const location = entries.reduce((acc, entry) => {
      const [k, v] = entry;
      acc[k] = v;
      return acc;
    }, {});

    return onSave(location);
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <h1 className="">Discover a new Location!!!</h1>
      {location && (
        <input type="hidden" name="_id" defaultValue={location._id} />
      )}

      <div className="control">
        <label htmlFor="name">Name:  </label>
        <input
          defaultValue={location ? location.name : null}
          name="name"
          id="name"
        />
      </div>

      <div className="control">
        <label htmlFor="type">Type:  </label>
        <input
          defaultValue={location ? location.type : null}
          name="type"
          id="type"
        />
      </div>

      <div className="control">
        <label htmlFor="dimension">Dimension:</label>
        <input
          defaultValue={location ? location.dimension : null}
          name="dimension"
          id="dimension"
        />
      </div>

      <div className="formbuttons">
        <button className="button" type="submit" disabled={disabled}>
          {location ? "Update Employee" : "Create Your Location"}
        </button>

        <button className="button" type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default LocationForm;
