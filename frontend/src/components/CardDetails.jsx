import "./CardDetails.css"
import Stars from "../components/Stars"
import profilImg from "../assets/avatar-woman.png"
import likeImg from "../assets/coeur-fav.jpg"

// création du composant CardDetails avec passage de props "destructurées" déclarées dans descriptionCard
const CardDetails = ({ univers, imgUrl, name, price, id }) => {
  return (
    <div className="globalCardDetails">
      <div className="topCardDetails">
        <img
          className="profil-picture"
          src={profilImg}
          alt="profil du créateur"
        />
        <img className="card-picture" src={imgUrl} alt={name} />
        <p>{name}</p> {/* props de CardDetails */}
        <p>{univers}</p> {/* props de CardDetails */}
        <p>{price}$</p> {/* props de CardDetails */}
        <Stars />
      </div>
      <div className="bottomCardDetails">
        <button className="button-like">
          <img className="like-pict" src={likeImg} alt="coeur" />
        </button>
      </div>
    </div>
  )
}

export default CardDetails
