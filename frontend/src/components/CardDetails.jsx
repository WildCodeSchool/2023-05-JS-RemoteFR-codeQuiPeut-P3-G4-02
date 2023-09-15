import "./CardDetails.css"
import Stars from "../components/Stars"
import profilImg from "../assets/avatar-woman.png"
import likeImg from "../assets/coeur-fav.jpg"
import logopanier from "../assets/icon-caddy.png"

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
        <p>{name}</p>
        <p>{univers}</p>
        <p>{price}$</p>
        <Stars />
      </div>
      <div className="bottomCardDetails">
        <button className="button-like">
          <img className="like-pict" src={likeImg} alt="coeur" />
        </button>
        <button className="button-caddy">
          <img className="caddy-pict" src={logopanier} alt="caddy" />
        </button>
      </div>
    </div>
  )
}

export default CardDetails
