import React, { useState } from "react";
import "./App.css";
import LandingPage from "./components/landingPage";
import Header from "./components/header";
import CharacterPage from "./components/characterPage";
import LocationPage from "./components/locationPage";

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

  
  return (
    <div className="App">
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
          <CharacterPage />
        </div>
      )}
      {currentPage === "LocationPage" && (
        <div>
          
          <LocationPage />
          </div>
      )}
    </div>);
}

export default App;
