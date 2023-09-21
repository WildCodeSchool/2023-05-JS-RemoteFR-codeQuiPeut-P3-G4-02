import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import CardDetails from "../components/CardDetails"
// import Stars from "../components/Stars"
// import profilePicture from "../assets/avatar-woman.png"

const DescriptionCarte = ({ addPanier, setAddPanier }) => {
  const [produit, setProduit] = useState([])
  const { id } = useParams() // permet d'utiliser id dans la route de axios .get http://localhost:4242/produit/${id}

  useEffect(() => {
    axios
      .get(`http://localhost:4242/produits/${id}`) // id provient du useparams ligne 11 et permet de recuperer l'id de la carte
      .then((res) => setProduit(res.data))
  }, [])
  // variable à envoyer en post
  // declaration de la fonction handleAdd
  const handleAdd = () => {
    // attribution des variables avec les valeurs utilisées dans le axios .post
    const userId = "1"
    const productsId = produit.id
    const quantity = "1"
    // axios.post pour ajouter les data dans la table panier de la bdd
    axios.post(`http://localhost:4242/panier`, {
      userId,
      productsId,
      quantity,
    })
    // setAddPanier(addPanier + 1)
  }

  // eslint-disable-next-line no-restricted-syntax
  return (
    <>
      {/* appel du composant CardDetails avec attribution des clés et des valeurs pour passage des props dans le composant CardDetails */}
      <CardDetails
        key={produit.id}
        id={produit.id}
        imgUrl={produit.imgUrl}
        name={produit.name}
        price={produit.price}
        univers={produit.univers}
      />
      {/* boutton ajouter au panier */}
      <input
        className="btn-caddy"
        type="button"
        value="ajouter panier"
        onClick={handleAdd} // ajout evènement onClick avec la fonction handleAdd déclarée plus haut qui a pour but d'ajouter les data dans la table panier de la bdd
      />
    </>
  )
}

export default DescriptionCarte
