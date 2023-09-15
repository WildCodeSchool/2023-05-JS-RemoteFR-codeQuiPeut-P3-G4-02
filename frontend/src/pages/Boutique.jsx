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
            key={produit.id}
            id={produit.id}
            imgUrl={produit.imgUrl}
            name={produit.name}
            price={produit.price}
          />
        </>
      ))}
    </div>
  )
}

export default Boutique
