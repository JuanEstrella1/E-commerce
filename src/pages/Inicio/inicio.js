import React from "react";
import { Link } from "react-router-dom";
import Card from "../../components/card/card";
import Fila from "../../components/ListProductos/filaProductos";
import { buscar } from "../../apis/apis";

function Inicio() {
    return (
      <main>
        <Link to="/nuevoProducto"> <button>Nuevo producto</button>
        </Link>
        <Link to="/totalProductos"> <button>totalProductos</button>
        </Link>
        <div className="preguntas">
          <a href="/">¿Quienes Somos?</a>
          <a href="/">Politica de privacidad</a>
          <a href="/">Programa de fidelidad</a>
          <a href="/">Nuestras tiendas</a>
          <a href="/">Quiero ser embajador</a>
          <a href="/">Anuncie aqui</a>
        </div>

        
        <Fila categoria={"videojuegos"} titulo={"Videojuegos"}/>
        <Fila categoria={"consola"} titulo={"Consolas"}/>
        <Fila categoria={"boardgame"} titulo={"Juegos de mesa"}/>

        
      </main>
    );
  }
  
  export default Inicio;