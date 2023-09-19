const AbstractManager = require("./AbstractManager")

class PanierManager extends AbstractManager {
  constructor() {
    super({ table: "panier" })
  }

  insert(panier) {
    return this.database.query(
      `insert into ${this.table} (user_id, products_id, quantity) values (?,?,?)`,
      [panier.user_id, panier.products_id, panier.quantity]
    )
  }

  update(panier) {
    return this.database.query(
      `UPDATE ${this.table} SET user_id = ?, products_id = ?, quantity = ?, WHERE (id = ?)`,
      [panier.user_id, panier.products_id, panier.quantity]
    )
  }
}

module.exports = PanierManager
