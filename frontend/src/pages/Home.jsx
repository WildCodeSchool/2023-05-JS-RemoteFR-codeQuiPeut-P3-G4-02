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
        <button>Boutique</button>
      </Link>
    </>
  )
}

export default Home
