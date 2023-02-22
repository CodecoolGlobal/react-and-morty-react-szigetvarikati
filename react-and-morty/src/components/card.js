import { useCharacters } from "../api/useData"

function Card() {
  const characters = useCharacters(1);
  if (characters === null) {
    return "Loading..."
  }
  console.log(characters);

  return (
    <div className="card">
      <h2>{characters.results[1].name}</h2>
      <p>{characters.results[1].species}</p>
      <img src={characters.results[1].image} alt='szia'></img>

    </div>
  )
}

export default Card