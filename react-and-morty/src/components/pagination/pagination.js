import './pagination.css'

const Footer = (props) => {
return(
    <div className="pagination">
    {[...Array(Math.ceil(props.data.length/10))].map((_,i) => <p key={`pagination${i*10}`}onClick={() => props.setPage(i*10)}>{i+1}</p>)}
    </div>
)
}

export default Footer