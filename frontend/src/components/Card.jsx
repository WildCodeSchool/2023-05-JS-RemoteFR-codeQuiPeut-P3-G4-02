import "./Card.css"

const Card = (produit) => {
  return (
    <div className="card">
      <div key={produit.id}>
        <img src={produit.imgUrl} alt={produit.name} />
        <p>{produit.name}</p>
        <p>{produit.univers}</p>
        <p>{produit.catégorie}</p>
        <p>{produit.price}</p>
      </div>
    </div>
  )
}

export default Card
