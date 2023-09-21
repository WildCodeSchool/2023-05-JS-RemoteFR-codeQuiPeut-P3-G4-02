const AbstractManager = require("./AbstractManager")

class UtilisateursManager extends AbstractManager {
  constructor() {
    super({ table: "utilisateurs" })
  }

  insert(utilisateurs) {
    return this.database.query(
      `insert into ${this.table} (user_firstname, user_lastname, adress, phonenumber, profilpicture, password, email) values (?,?,?,?,?,?,?)`,
      [
        utilisateurs.userFirstname,
        utilisateurs.userLastname,
        utilisateurs.adress,
        utilisateurs.phoneNumber,
        utilisateurs.profilPicture,
        utilisateurs.password,
        utilisateurs.email,
      ]
    )
  }

  update(utilisateurs) {
    return this.database.query(
      `UPDATE ${this.table} SET  = ?, user_firstname  = ?, user_lastname = ?, adress = ?, phonenumber = ?, profilpicture = ?, password = ?, email = ?, WHERE (id = ?)`,
      [
        utilisateurs.userFirstname,
        utilisateurs.userLastname,
        utilisateurs.adress,
        utilisateurs.phoneNumber,
        utilisateurs.profilPicture,
        utilisateurs.password,
        utilisateurs.email,
      ]
    )
  }
}

module.exports = UtilisateursManager
