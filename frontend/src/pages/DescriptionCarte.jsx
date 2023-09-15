import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import CardDetails from "../components/CardDetails"
// import Stars from "../components/Stars"
// import profilePicture from "../assets/avatar-woman.png"

const DescriptionCarte = () => {
  const [produit, setProduit] = useState([])
  const { id } = useParams()
  console.log(id)

  useEffect(() => {
    axios
      .get(`http://localhost:4242/produits/${id}`)
      .then((res) => setProduit(res.data))
  }, [])

  return (
    <>
      <CardDetails
        key={produit.id}
        id={produit.id}
        imgUrl={produit.imgUrl}
        name={produit.name}
        price={produit.price}
        univers={produit.univers}
      />
    </>
  )
}

export default DescriptionCarte
