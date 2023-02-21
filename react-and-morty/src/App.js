import React, { useState } from "react";
import "./App.css";
import { useCharacters, useLocations } from "./api/useData";
import LandingPage from "./components/landingPage";
import Header from "./components/header";
import CharacterPage from "./components/characterPage";
import Card from "./components/card";

function App() {
  const characters = useCharacters(1);
  const locations = useLocations(1);

  const [currentPage, setCurrentPage] = useState("LandingPage");

  console.log("Characters data: ");
  console.log(characters);
  console.log("Locations data: ");
  console.log(locations);

  function handlePageChangeCharacter() {
    setCurrentPage("CharacterPage");
  }

  function handlePageChangeLocation() {
    setCurrentPage("LocationPage");
  }

  function handlePageChangeLandingPage() {
    setCurrentPage("LandingPage");
  }

  return (
    <div className="App">Take a look at the console! (F12)
      <Header
        handlePageChangeCharacter={handlePageChangeCharacter}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        handlePageChangeLocation={handlePageChangeLocation}
        handlePageChangeLandingPage={handlePageChangeLandingPage} />
      {currentPage === "LandingPage" && (
        <LandingPage />
      )}
      {currentPage === "CharacterPage" && (
        <div>
          <h2>{characters.results[1].name}</h2>
          <p>{characters.results[1].species}</p>
          <img src={characters.results[1].image} alt='szia'></img>
        </div>
      )}
    </div>);
}

export default App;
