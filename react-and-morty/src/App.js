import React, { useState } from "react";
import "./App.css";
import { useCharacters, useLocations } from "./api/useData";
import LandingPage from "./components/landingPage";
import Header from "./components/header";
import CharacterPage from "./components/characterPage";
import Card from "./components/card";
import Button from "./components/button";

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
          <Button text="Previous" />
          <Button text="Next" />
          <CharacterPage />
        </div>
      )}
    </div>);
}

export default App;
