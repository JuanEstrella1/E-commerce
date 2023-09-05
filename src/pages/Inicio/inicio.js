import React from "react";
import { Link } from "react-router-dom";

function Inicio() {
    return (
      <main>
       
        <div className="preguntas">
          <a href="/">¿Quienes Somos?</a>
          <a href="/">Politica de privacidad</a>
          <a href="/">Programa de fidelidad</a>
          <a href="/">Nuestras tiendas</a>
          <a href="/">Quiero ser embajador</a>
          <a href="/">Anuncie aqui</a>
        </div>

        <Link to="/totalProductos"> <button>ir a productos</button>
        </Link>
      </main>
    );
  }
  
  export default Inicio;