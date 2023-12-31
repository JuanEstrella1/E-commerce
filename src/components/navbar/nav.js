import React from "react";
import logo from "../aluraGeek3.png";
import "./navbar.css"
import { Link } from "react-router-dom";
import {AiOutlineSearch} from "react-icons/ai"

function Navbar() {

let anchoPantalla=window.innerWidth;
console.log(anchoPantalla)


  return (
    <header>
      <nav className="nav">
        <div className="contBuscador">
        <Link to="/"> <img src={logo} alt="logo" className="imglogo"></img>
        </Link>
        <input type="text" className="buscador" placeholder="¿Qué deseas buscar?"></input>
        <AiOutlineSearch className="lupa"></AiOutlineSearch>
        </div>
        <Link to="/login" className="linkBtnLogin"><button className="btnLoginInicio">Login</button></Link> 

      </nav>
    </header>
  );
}

export default Navbar;
