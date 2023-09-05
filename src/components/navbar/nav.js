import React from "react";
import logo from "../aluraGeek3.png";
import "./navbar.css"
import {AiOutlineSearch} from "react-icons/ai"

function Navbar() {
  return (
    <header>
      <nav className="nav">
        <div className="contBuscador">
        <img src={logo} alt="Logo" className="imglogo"></img>
        <input type="text" className="buscador" placeholder="¿Qué deseas buscar?"></input>
        <AiOutlineSearch className="lupa"></AiOutlineSearch>
        </div>
        <button className="btnLogin">Login</button>

      </nav>
    </header>
  );
}

export default Navbar;
