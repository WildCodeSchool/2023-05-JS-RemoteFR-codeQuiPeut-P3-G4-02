const AbstractManager = require("./AbstractManager")

class PanierManager extends AbstractManager {
  constructor() {
    super({ table: "panier" })
  }

  findAllPanierDetails() {
    return this.database.query(
      "SELECT * FROM panier join produits as P ON panier.products_id = P.id"
    )
  }

  insert(panier) {
    return this.database.query(
      `insert into ${this.table} (user_id, products_id, quantity) values (?,?,?)`,
      [panier.userId, panier.productsId, panier.quantity]
    )
  }

  update(panier) {
    return this.database.query(
      `UPDATE ${this.table} SET user_id = ?, products_id = ?, quantity = ?, WHERE (id = ?)`,
      [panier.userId, panier.productsId, panier.quantity]
    )
  }
}

module.exports = PanierManager
