import Home from "./pages/Home"
import Compte from "./pages/Compte"
import Contact from "./pages/Contact"
import Boutique from "./pages/Boutique"
import Navbar from "./components/Navbar"
import DescriptionCarte from "./pages/DescriptionCarte"
import Panier from "./pages/Panier"
import { Routes, Route } from "react-router-dom" // permet d'utiliser les routes pour faire un router et pouvoir naviguer entre les pages par l'  URL
import { useState } from "react"

import "./App.css"

function App() {
  const [addPanier, setAddPanier] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* Appel de la page Home si l'on inscrit "/" dans l'URL */}
        <Route path="/" element={<Home />} />
        {/* Appel de la page Compte si l'on inscrit "/compte" dans l'URL */}
        <Route path="/compte" element={<Compte />} />
        {/* Appel de la page Contact si l'on inscrit "/contact" dans l'URL */}
        <Route path="/contact" element={<Contact />} />
        {/* Appel de la page Boutique si l'on inscrit "/boutique" dans l'URL */}
        <Route path="/boutique" element={<Boutique />} />
        {/* Appel de la page descriptioncarte si l'on inscrit "/descriptioncarte" dans l'URL */}
        <Route
          path="/descriptioncarte/:id" // :id permet de cibler l'id de la carte dans l'URL nommé dans l'axios .get de DescriptionCarte
          element={
            <DescriptionCarte
              addPanier={addPanier}
              setAddPanier={setAddPanier}
            />
          }
        />
        <Route path="/panier" element={<Panier addPanier={addPanier} />} />
      </Routes>
    </div>
  )
}

export default App
