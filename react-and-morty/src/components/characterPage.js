import { useEffect, useState } from "react";
import OneCharacter from "./OneCharacter";
import Footer from "./pagination/pagination";
import List from "./displayList/list";

const paginating = (characters, page) => {
  return characters.map((x,i)=> {if(page === 0 && i < 10){return x} else if
  (i + page < page + 10){return characters[i+page]}
    } )
}

function CharacterPage() {
  const [characters, setCharacters] = useState([])
  const [selectedCharacter, setSelectedCharacter] = useState(null)
  const [paginationData, setPaginationData] = useState([])
  const [page, setPage] = useState()
  const [condition, setCondition] = useState(false)
  const [stayAtCurrentPage, setStayAtCurrentPage] = useState(false)
  console.log(characters)
  console.log(paginationData)
  console.log(selectedCharacter)
  console.log(stayAtCurrentPage)
  
  useEffect(() => {
    const url = "/api/characters";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCharacters(data))
      .then(() => setPage(stayAtCurrentPage === false ? 0 : page))
      .then(() => setCondition(false));
  },[])
  
  

  const handleKill = async (character) => {
    const newStatus = character.status === "Alive" ? "Dead" : "Alive";
    try {
      const response = await fetch(`/api/characters/id/${character.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const actualData = paginating(characters, page).filter(x=> x !== undefined)
    setPaginationData(actualData)
  },[page, characters])
 
  return (
    <div>
      {selectedCharacter && (
        <OneCharacter
          character={selectedCharacter}
          onClose={() => setSelectedCharacter(null)}
          handleKill={handleKill}
          condition={() => setCondition(true)}
          stayAtCurrentPage={() => setStayAtCurrentPage(true)}
        />
      )}
      <h1>Characters</h1>
      <List paginationData={paginationData} setSelectedCharacter={setSelectedCharacter} character={false} />
      <Footer data={characters} setPage={setPage} />
    </div>
  );
}

export default CharacterPage;
