import { useState, useEffect } from "react"
import axios from "axios"

const Boutique = () => {
  const [produits, setProduits] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:4242/produits")
      .then((res) => setProduits(res.data))
  }, [])

  return (
    <div>
      {produits.map((produit) => (
        <>
          <img src={produit.imgUrl} alt={produit.name}></img>
          <p>{produit.name}</p>
          <p>{produit.univers}</p>
          <p>{produit.catégorie}</p>
          <p>{produit.price}</p>
        </>
      ))}
    </div>
  )
}

export default Boutique
