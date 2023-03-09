import { useState } from "react";

const LocationForm = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    //console.log(formData);
    const location = {
      name: name,
      type: type,
      dimension: dimension
    }
    console.log(location);
    handleCreateLocation(location)
    setName("");
    setType("");
    setDimension("");
  };

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [dimension, setDimension] = useState("");

  const [data, setData] = useState(null);

  const handleCreateLocation = (location) => {
    fetch('/api/locations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(location)
    })
      .then((res) => res.json())
      .then((location) => {
        setData(location);
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

  // if (!location) {
  //   return (
  //     <div>Loading...</div>
  //   )
  // }
  return (
    <>
      <form className="form" onSubmit={onSubmit}>
        <h1 className="">Discover a new Location!!!</h1>
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
          <button className="button" type="submit">
            "Create Your Location"
          </button>
        </div>
      </form>
      {data
      ?<div className="oneChar">
    <div className="oneCharContent">
      <h2>Name: {data.name}</h2>
      <h4>Type: {data.type}</h4>
      <h4>Dimension: {data.dimension}</h4>
      <h6>ID: {data.id}</h6>
    </div>
  </div>
      :null}
    </>
  );
};

export default LocationForm;
