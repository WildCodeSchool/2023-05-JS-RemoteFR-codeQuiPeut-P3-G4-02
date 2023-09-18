import "./Home.css"
import { Link } from "react-router-dom"
//  import { useState, useEffect } from "react"
//  import axios from "axios"

const Home = () => {
  //  const [produits, setProduits] = useState([])

  /*  useEffect(() => {
        axios
      .get("http://localhost:4242/produits")
      .then((res) => setProduits(res.data))
  }, [])  */

  return (
    <>
      <Link to="/boutique">
        <button className="glowing-btn">
          <span className="glowing-txt">
            B<span className="faulty-letter">O</span>UTIQUE
          </span>
        </button>
      </Link>
      <div className="presentation">
        <h1>Etes vous prêts à changer de rôle dans votre vie?</h1>
        <p>Changez votre réalité le temps d'une partie entre amis</p>
        <p>Inité ou non découvrez l'univers du jeu de rôle</p>
        <p>
          Vous trouverez dans ALTERWORLD les objets dont vous aurez besoin pour
          rendre votre expérience de jeu unique!
        </p>
      </div>
    </>
  )
}

export default Home
