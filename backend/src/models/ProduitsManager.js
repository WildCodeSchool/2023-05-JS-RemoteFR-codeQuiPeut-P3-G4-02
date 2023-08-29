const AbstractManager = require("./AbstractManager")

class ProduitsManager extends AbstractManager {
  constructor() {
    super({ table: "produits" })
  }

  insert(produits) {
    return this.database.query(
      `insert into ${this.table} (name, price, imgUrl, category, univers, univers_idunivers, typeProduits) values (?,?,?,?,?,?,?)`,
      [
        produits.name,
        produits.price,
        produits.imgUrl,
        produits.category,
        produits.univers,
        produits.univers_idunivers,
        produits.typeProduits,
      ]
    )
  }

  update(produits) {
    return this.database.query(
      `UPDATE ${this.table} SET name = ?, price = ?, imgUrl = ?, category = ?, univers = ?, univers_idunivers = ?, typeProduits = ?, WHERE (id = ?)`,
      [
        produits.name,
        produits.price,
        produits.imgUrl,
        produits.category,
        produits.univers,
        produits.univers_idunivers,
        produits.typeProduits,
      ]
    )
  }
}

module.exports = ProduitsManager
