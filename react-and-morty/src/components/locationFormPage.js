import { useEffect, useState } from "react";

const LocationForm = ({ location, onCancel }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    //console.log(formData);
    const entries = [...formData.entries()];
    //console.log(entries);

    const location = entries.reduce((acc, entry) => {
      const [k, v] = entry;
      acc[k] = v;
      return acc;
    }, {});
    console.log(location);


  };


  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [dimension, setDimension] = useState("");

  const [data, setData] = useState(location);
  const [loading, setLoading] = useState(true)

  const handleCreateLocation = (name, type, dimension) => {
    fetch('/api/locations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( name, type, dimension )
    })
      .then((res) => res.json())
      .then((location) => {
        setData([...data, location]);
      })
  };

  // useEffect(() => {
  //   fetch('/api/locations')
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setData(data);
  //       setLoading(false);
  //     });
  //   }, [] );
  //   console.log(data);
  
  if (!location) {
    return (
      <div>Loading...</div>
    )
  }
  return (
    <form className="form" onSubmit={onSubmit}>
      <h1 className="">Discover a new Location!!!</h1>
      {location && (
        <input type="hidden" name="_id" defaultValue={location._id} />
      )}

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
        <label htmlFor="type">Type:  </label>
        <input
          value={type}
          onChange={(e) => setType(e.target.value)}
          type="text"
          name="type"
          id="type"
        />
      </div>

      <div className="control">
        <label htmlFor="dimension">Dimension:</label>
        <input
          value={dimension}
          onChange={(e) => setDimension(e.target.value)}
          type="text"
          name="dimension"
          id="dimension"
        />
      </div>

      <div className="formbuttons">
        <button className="button" type="submit" onClick={handleCreateLocation(name, type, dimension)}>
          {location ? "Update Location" : "Create Your Location"}
        </button>

        <button className="button" type="button" onClick={onCancel} >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default LocationForm;
