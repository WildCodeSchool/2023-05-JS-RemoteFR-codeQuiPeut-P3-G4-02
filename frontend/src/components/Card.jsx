import Stars from "./Stars"
import profilePicture from "../assets/avatar-woman.png"
import "./Card.css"

const Card = (produit) => {
  return (
    <div className="card">
      <img
        className="profile-picture"
        src={profilePicture}
        alt="profilePicture"
      />
      <div key={produit.id}>
        <img className="card-picture" src={produit.imgUrl} alt={produit.name} />
        <p>{produit.name}</p>
        <p>{produit.univers}</p>
        <p>{produit.catégorie}</p>
        <p>{produit.price}</p>
        <Stars />
      </div>
    </div>
  )
}

export default Card
