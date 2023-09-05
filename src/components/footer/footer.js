import React from "react";
import logo from "../aluraGeek3.png";
import {TextField} from "@mui/material"
import { Link } from "react-router-dom";
import "./footer.css"

function Footer() {
  return (
    <footer>
      <div className="logoFooter">
      <Link to="/"> <img src={logo} alt="logo" className="imgFooter"></img>
        </Link>
      </div>
      <div className="preguntas">
        <a href="/">¿Quienes Somos?</a>
        <a href="/">Politica de privacidad</a>
        <a href="/">Programa de fidelidad</a>
        <a href="/">Nuestras tiendas</a>
        <a href="/">Quiero ser embajador</a>
        <a href="/">Anuncie aqui</a>
      </div>
      <div className="contacto">
        <h2>Habla con nosotros</h2>
        <form>
        <TextField id="outlined-basic-1" label="Nombre" variant="outlined" />
        <br></br>
        <br></br>
        <TextField id="outlined-basic" label="Escribir Mensaje" variant="outlined"  />
        <br></br>
        <button className="btnMensaje"onSubmit="">Enviar Mensaje</button>
        </form>
      </div>
    </footer>
  );
}

export default Footer;
