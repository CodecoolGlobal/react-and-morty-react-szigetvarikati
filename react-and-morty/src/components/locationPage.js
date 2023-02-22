import { useEffect, useState } from "react";
import Button from "./button";
import OneCharacter from "./OneCharacter";

function LocationPage({ displayNextPage, displayPrevPage }) {
  const [locations, setLocations] = useState([]);
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedLocation, setSelectedLocation] = useState(null)

  const url = "https://rickandmortyapi.com/api/location/?page="
  useEffect(() => {
    fetch(`${url}${currentPage}`)
      .then((response) => response.json())
      .then((data) => setLocations(data));
  }, [currentPage])


  const showLocationPage = Array.isArray(locations.results) && locations.results.map((location) => {
    return (
      <div className="card" onClick={() => setSelectedLocation(location)}>
        <h2>{location.name}</h2>
        <p>{location.type}</p>
      </div>
    )
  });

  // function displayOneCard(event) {
  //   const OneCard = Array.isArray(locations.results) && locations.results.map((location) => {
  //     return ({
  //       name: location.name,
  //       type: location.type,
  //       id: location.id
  //     })
  //   })
  //   console.log(OneCard)

  //   for (let i = 0; i < OneCard.length; i++) {
  //     if (event.target.innerText === (OneCard[i].name || OneCard[i].type)) {
  //       console.log(OneCard[i].id);
  //     }
  //   }
  // }


  function displayNextPage() {
    if (currentPage < 42) {
      setCurrentPage(currentPage + 1)
    }
  }

  function displayPrevPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }
  
  return (
    <div>
      {selectedLocation && (
        <OneCharacter character={selectedLocation} onClose={() => setSelectedLocation(null)} />
      )}
      <div className="pagination">
        <Button text="Previous" onClick={displayPrevPage}/>
        <Button text="Next" onClick={displayNextPage}/>
      </div>
      <h1>Locations</h1>
      <div className="cardContainer">
        {showLocationPage}
      </div>
    </div>
  );
}

export default LocationPage;