import React from "react";
import logo from "../aluraGeek3.png";
import {TextField} from "@mui/material"
import { Link } from "react-router-dom";
import {BiLogoGithub, BiLogoLinkedinSquare, BiLogoFacebookSquare, BiLogoGmail} from "react-icons/bi"
import "./footer.css"

function Footer() {
  return (
    <footer>
      <div className="containerFooter">
      <div className="solo2">
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
      </div>
      <div className="contacto">
        <h2>Habla con nosotros</h2>
        <form>
        <div className="inputFooter">
        <TextField id="outlined-basic-1" label="Nombre" variant="outlined" fullWidth margin="normal"/>
        <TextField id="outlined-basic" label="Escribir Mensaje" variant="outlined" fullWidth margin="normal"/>
        <br></br>
        </div>
        <button className="btnMensaje"onSubmit="">Enviar Mensaje</button>
        </form>
      </div>
      </div>
      <div className="referencias">
      <h5> Desarrollado por Juan Esteban Estrella</h5>
      <h5>2023</h5>
      <div className="containerLogo">
       <Link to="https://github.com/JuanEstrella1" target= "_blank" rel="noreferrer">
         <BiLogoGithub className="logoRedes"  />
       </Link>
       <Link to="https://www.linkedin.com/in/juan-esteban-estrella-soto/" target= "_blank" rel="noreferrer">
         <BiLogoLinkedinSquare className="logoRedes"  />
       </Link>
       <Link to="https://www.facebook.com/juanesteban.estrellaa" target= "_blank" rel="noreferrer">
         <BiLogoFacebookSquare className="logoRedes"  />
       </Link>
       <Link to="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=jestrella9294@gmail.com" target= "_blank" rel="noreferrer">
         <BiLogoGmail className="logoRedes"  />
       </Link>
      </div>
      </div>
    </footer>
  );
}

export default Footer;
