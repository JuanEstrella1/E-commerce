import React from "react";
import imgError404 from "./404 Ecomerce.svg"
import { Link } from "react-router-dom";
import "./404.css";

function Error404() {
  return (
    <div className="container404">
      <img src={imgError404} alt="" className="img404"/>
      <div className="containerInfo404">
      <h1 class="titulo404">Oops...!</h1>
      <p className="parrafo404">Lo sentimos, no encontramos el producto que buscas</p>
      <Link to={"/"}><button className="btn404">Inicio</button></Link>
      </div>
    </div>
  );
}

export default Error404;
