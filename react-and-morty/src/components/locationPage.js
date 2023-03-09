/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
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
import OneLocation from "./OneLocation";
import List from "./displayList/list";
import Footer from "./pagination/pagination";

const paginating = (characters, page) => {
  return characters.map((x,i)=> {if(page === 0 && i < 10){return x} else if
  (i + page < page + 10){return characters[i+page]}
    } )
}


function LocationPage() {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null)
  const [paginationData, setPaginationData] = useState([])
  const [page, setPage] = useState()
  const locationPictures = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10]
  console.log(locationPictures[0])
  console.log(locations)

  useEffect(() => {
    const url = '/api/locations'
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const newDataWithImgs = data.map((x, i) => {
          return {...x, image: locationPictures[Math.ceil(Math.random()*9)]}});
        setLocations(newDataWithImgs);
      })
      .then(() => setPage(0))
  }, [])

  useEffect(() => {
    const actualData = paginating(locations, page).filter(x=> x !== undefined)
    setPaginationData(actualData)
  },[page])

  return (
    <div>
      {selectedLocation && (
        <OneLocation character={selectedLocation} onClose={() => setSelectedLocation(null)} />
      )}
      <h1>Locations</h1>
      <List paginationData={paginationData} setSelectedCharacter={setSelectedLocation} character={false} />
      <Footer data={locations} setPage={setPage} />
    </div>
  );
}

export default LocationPage;