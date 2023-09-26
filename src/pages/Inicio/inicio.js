import React from "react";
import { Link } from "react-router-dom";
import Fila from "../../components/ListProductos/filaProductos";
import "./inicio.css";
/*import banner from "./toad.jpg"; */

function Inicio() {
  return (
    <main>
      
      <div className="containerPrincipal">
        {/* <img src={banner} alt="banner" className="banner" /> */}
        <div className="containerContenidoBanner">
        <h1 className="tituloInicio"> Septiembre Promocional</h1>
        <h3 className="subTituloInicio"> Productos seleccionados con el 40% de descuento</h3>
          <Link to="/totalProductos" className="containerBtnInicio">
        <button className="btnInicio">Ver mas</button>
      </Link>
        </div>
      </div>

      <Fila categoria={"videojuegos"} titulo={"Videojuegos"} />
      <Fila categoria={"consola"} titulo={"Consolas"} />
      <Fila categoria={"boardgame"} titulo={"Juegos de mesa"} />
    </main>
  );
}

export default Inicio;
