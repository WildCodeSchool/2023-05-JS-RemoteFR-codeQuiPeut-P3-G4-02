import { Link } from "react-router-dom"
import logoalter from "../assets/alterworldlogo.png"
import logopanier from "../assets/icon-caddy.png"

import "./Navbar.css"

const Navbar = () => {
  return (
    <navbar className="navbarGlobal">
      <ul id="primary">
        <li className="li-logo">
          <Link to="/">
            <a href="#">
              <img className="logo" src={logoalter} />
            </a>
          </Link>
        </li>
        <li>
          <Link to="/Compte">COMPTE</Link>
        </li>
        <li>
          <Link to="/Contact">CONTACT</Link>
        </li>
        <li className="li-panier">
          <Link to="/Panier">
            <img className="logo-panier" src={logopanier} />
          </Link>
        </li>
      </ul>
    </navbar>
  )
}

export default Navbar
