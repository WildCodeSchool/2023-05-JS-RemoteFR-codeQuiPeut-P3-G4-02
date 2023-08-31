import { useState, useEffect } from "react"
import axios from "axios"
import Card from "../components/Card"

const Boutique = () => {
  const [produits, setProduits] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:4242/produits")
      .then((res) => setProduits(res.data))
  }, [])

  return (
    <div className="cards-container">
      {produits.map((produit) => (
        <>
          <Card
            key={produit}
            imgUrl={produit.imgUrl}
            name={produit.name}
            univers={produit.univers}
            catégorie={produit.catégorie}
            price={produit.price}
          />
        </>
      ))}
    </div>
  )
}

export default Boutique
