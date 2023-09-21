import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom" // Permet d'appeller BrowserRouter pour l'utiliser

import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <React.StrictMode>
    {/* BrowserRouter donne pouvoir à APP.JSX */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
