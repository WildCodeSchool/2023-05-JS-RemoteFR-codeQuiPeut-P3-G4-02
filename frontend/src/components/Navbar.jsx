import { Link } from "react-router-dom"
import logoalter from "../assets/alterworldlogo.png"
import logopanier from "../assets/icon-caddy.png"

import "./Navbar.css"

const Navbar = () => {
  return (
    <navbar className="navbarGlobal">
      <ul>
        <a>
          <Link to="/">
            <a href="#">
              <img className="logo" src={logoalter} />
            </a>
          </Link>
        </a>
        <li>
          <Link to="/Compte">COMPTE</Link>
        </li>
        <li>
          <Link to="/Contact">CONTACT</Link>
        </li>
        <img className="logo-panier" src={logopanier} />
      </ul>
    </navbar>
  )
}

export default Navbar
