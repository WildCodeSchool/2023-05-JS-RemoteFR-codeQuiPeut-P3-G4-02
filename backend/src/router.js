const express = require("express")

const router = express.Router()

const itemControllers = require("./controllers/itemControllers")
const produitsControllers = require("./controllers/produitsControllers")

router.get("/produits", produitsControllers.browse)
router.get("/produits/:id", produitsControllers.read)
router.post("/produits", produitsControllers.add)
router.put("/produits/:id", produitsControllers.edit)
router.delete("/produits/:id", produitsControllers.destroy)

router.get("/items", itemControllers.browse)
router.get("/items/:id", itemControllers.read)
router.put("/items/:id", itemControllers.edit)
router.post("/items", itemControllers.add)
router.delete("/items/:id", itemControllers.destroy)

module.exports = router
