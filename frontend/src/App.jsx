import Home from "./pages/Home"
import Compte from "./pages/Compte"
import Contact from "./pages/Contact"
import Boutique from "./pages/Boutique"
import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"

import "./App.css"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/compte" element={<Compte />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/boutique" element={<Boutique />} />
      </Routes>
    </div>
  )
}

export default App
