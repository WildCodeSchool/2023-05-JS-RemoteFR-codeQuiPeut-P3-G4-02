import { useState, useEffect } from "react"
import axios from "axios"

export default function Home() {
  const [produits, setProduits] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:4242/produits")
      .then((res) => setProduits(res.data))
  }, [])

  return (
    <header className="App-header">
      {produits.map(produit => (
        <>
          <img src={produit.imgUrl} alt={produit.name}></img>
          <p>{produit.price}</p>
        </>
      ))}
    </header>
  )
}
