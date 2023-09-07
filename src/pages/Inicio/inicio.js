import React from "react";
import { Link } from "react-router-dom";
import Card from "../../components/card/card";
import Fila from "../../components/ListProductos/filaProductos";

function Inicio() {
    return (
      <main>
       <Link to="/Producto"> <button>ir a productos</button>
        </Link>
        <div className="preguntas">
          <a href="/">¿Quienes Somos?</a>
          <a href="/">Politica de privacidad</a>
          <a href="/">Programa de fidelidad</a>
          <a href="/">Nuestras tiendas</a>
          <a href="/">Quiero ser embajador</a>
          <a href="/">Anuncie aqui</a>
        </div>

        <Card />
        <Fila />
        <Fila />
        <Fila />
        

        
      </main>
    );
  }
  
  export default Inicio;