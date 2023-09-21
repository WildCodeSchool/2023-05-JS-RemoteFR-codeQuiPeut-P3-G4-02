const express = require("express")

const router = express.Router()

const itemControllers = require("./controllers/itemControllers")
const produitsControllers = require("./controllers/produitsControllers")
const panierControllers = require("./controllers/panierControllers")
const utilisateursControllers = require("./controllers/utilisateursControllers")

router.get("/produits", produitsControllers.browse)
router.get("/produits/:id", produitsControllers.read)
router.post("/produits", produitsControllers.add)
router.put("/produits/:id", produitsControllers.edit)
router.delete("/produits/:id", produitsControllers.destroy)

router.get("/panier", panierControllers.getAllPanier)
router.get("/panier/:id", panierControllers.read)
router.put("/panier/:id", panierControllers.edit)
router.post("/panier", panierControllers.add)
router.delete("/panier/:id", panierControllers.destroy)

router.get("/utilisateurs", utilisateursControllers.browse)
router.get("/utilisateurs/:id", utilisateursControllers.read)
router.put("/utilisateurs/:id", utilisateursControllers.edit)
router.post("/utilisateurs", utilisateursControllers.add)
router.delete("/utilisateurs/:id", utilisateursControllers.destroy)

router.get("/items", itemControllers.browse)
router.get("/items/:id", itemControllers.read)
router.put("/items/:id", itemControllers.edit)
router.post("/items", itemControllers.add)
router.delete("/items/:id", itemControllers.destroy)

module.exports = router
