import { useEffect, useState } from "react";
import Button from "./button";
import pic1 from "./locations_pic/pic1.png";
import pic2 from "./locations_pic/pic2.png";
import pic3 from "./locations_pic/pic3.png";
import pic4 from "./locations_pic/pic4.png";
import pic5 from "./locations_pic/pic5.png";
import pic6 from "./locations_pic/pic6.png";
import pic7 from "./locations_pic/pic7.png";
import pic8 from "./locations_pic/pic8.png";
import pic9 from "./locations_pic/pic9.png";
import pic10 from "./locations_pic/pic10.png";
import pic11 from "./locations_pic/pic11.png";
import pic12 from "./locations_pic/pic12.png";
import pic13 from "./locations_pic/pic13.png";
import OneLocation from "./OneLocation";


function LocationPage({ displayNextPage, displayPrevPage }) {
  const [locations, setLocations] = useState([]);
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedLocation, setSelectedLocation] = useState(null)
  const locationPictures = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12, pic13];

  function getRandomPicture() {
    const index = Math.floor(Math.random() * 13);
    return locationPictures[index]
  }

  const url = "https://rickandmortyapi.com/api/location/?page="

  useEffect(() => {
    fetch(`${url}${currentPage}`)
      .then((response) => response.json())
      .then((data) => {
        const newDataWithImgs = data.results.map((location) => ({
          ...location,
          img: locationPictures[Math.floor(Math.random() * locationPictures.length)],
        }));
        setLocations(newDataWithImgs);
      });
  }, [currentPage]);


  const showLocationPage = Array.isArray(locations) && locations.map((location) => {
    return (
      <div className="card" onClick={() => setSelectedLocation(location)}>
        <h2>{location.name}</h2>
        <img className="locPic" src={location.img} alt="the location"></img>
        <p>{location.type}</p>
      </div>
    )
  });

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
        <OneLocation character={selectedLocation} onClose={() => setSelectedLocation(null)} />
      )}
      <div className="pagination">
        <button className='PageChangeButton' onClick={displayPrevPage}>←</button>
        <button className='PageChangeButton' onClick={displayNextPage}>→</button>
      </div>
      <h1>Locations</h1>
      <div className="cardContainer">
        {showLocationPage}
      </div>
    </div>
  );
}

export default LocationPage;