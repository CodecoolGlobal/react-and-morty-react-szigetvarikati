import React, { useState } from "react";
import "./App.css";
import LandingPage from "./components/landingPage";
import Header from "./components/header";
import CharacterPage from "./components/characterPage";
import LocationPage from "./components/locationPage";
import CharacterFormPage from "./components/characterFormPage";
import LocationFormPage from "./components/locationFormPage";

function App() {

  const [currentPage, setCurrentPage] = useState("LandingPage");

  function handlePageChangeCharacter() {
    setCurrentPage("CharacterPage");
  }

  function handlePageChangeLocation() {
    setCurrentPage("LocationPage");
  }

  function handlePageChangeLandingPage() {
    setCurrentPage("LandingPage");
  }

  function handlePageChangeNewCharacter() {
    setCurrentPage("CharacterFormPage");
  }

  function handlePageChangeNewLocation() {
    setCurrentPage("LocationFormPage");
  }

  return (
    <div className="App">
      <Header
        handlePageChangeCharacter={handlePageChangeCharacter}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        handlePageChangeLocation={handlePageChangeLocation}
        handlePageChangeLandingPage={handlePageChangeLandingPage}
        handlePageChangeNewCharacter={handlePageChangeNewCharacter}
        handlePageChangeNewLocation={handlePageChangeNewLocation} />
      {currentPage === "LandingPage" && (
        <LandingPage />
      )}
      {currentPage === "CharacterPage" && (
        <div>
          <CharacterPage />
        </div>
      )}
      {currentPage === "LocationPage" && (
        <div>
          <LocationPage />
        </div>
      )}
      {currentPage === "CharacterFormPage" && (
        <div>
          <CharacterFormPage />
        </div>
      )}
      {currentPage === "LocationFormPage" && (
        <div>
          <LocationFormPage />
        </div>
      )}
    </div>);
}

export default App;