import "./Card.css"
import { Link } from "react-router-dom"

const Card = ({ imgUrl, name, price, id }) => {
  return (
    <div className="card">
      <div>
        <Link to={`/DescriptionCarte/${id}`}>
          <img className="card-picture" src={imgUrl} alt={name} />
          <p>{name}</p>
          <p>{price}$</p>
        </Link>
      </div>
    </div>
  )
}

export default Card
