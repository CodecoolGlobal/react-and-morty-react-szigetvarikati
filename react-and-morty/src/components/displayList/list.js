import './list.css'

const List = (props) => {
    return(
        <div className="cardContainer">
            {props.paginationData.map((x,i) => 
              <div className="card" key={`${x.name}${i}`} onClick={() => props.setSelectedCharacter(x)}>
                 <h2>{x.name}</h2>
                 {props.character &&
                 <>
                  <p>{x.species}</p>
                  <p>{x.status}</p>
                  <p>{x.location.name}</p>
                  </>}
                  <img className={props.character ? "charimg" : "locPic"} src={x.image} alt={x.name}></img>
                  {props.character ? <h6>{x.id}</h6> : <p>{x.type}</p>}
              </div>
            )}
        </div>
        )
}

export default List