import { useState, useEffect } from "react"
import axios from "axios"

import "./Panier.css"

const Panier = () => {
  const [poulet, setPoulet] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:4242/panier`).then((res) => setPoulet(res.data))
  }, [])

  return (
    <div className="containerPanier">
      {poulet.map((elem) => (
        <div key={elem.id}>
          <img src={elem.imgUrl} alt={elem.name} />
          <p>quantitees: {elem.quantity}</p>
          <p>{elem.name}</p>
        </div>
      ))}
    </div>
  )
}

export default Panier
