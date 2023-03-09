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
  const [selectedCharacter, setSelectedCharacter] = useState(null)
  const [paginationData, setPaginationData] = useState([])
  const [page, setPage] = useState()
  console.log(characters)
  console.log(paginationData)
  
   const fetchCharacters = () => {
    const url = "/api/characters";
    fetch(`${url}`)
      .then((response) => response.json())
      .then((data) => setCharacters(data))
      .then(() => setPage(0));
  };
  
   useEffect(() => {
    fetchCharacters();
  }, []);

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
      fetchCharacters();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const actualData = paginating(characters, page).filter(x=> x !== undefined)
    setPaginationData(actualData)
  },[page])
 
  return (
    <div>
      {selectedCharacter && (
        <OneCharacter
          character={selectedCharacter}
          onClose={() => setSelectedCharacter(null)}
          handleKill={handleKill}
        />
      )}
      <h1>Characters</h1>
      <List paginationData={paginationData} setSelectedCharacter={setSelectedCharacter} character={true} />
      <Footer data={characters} setPage={setPage} />
    </div>
  );
}

export default CharacterPage;
