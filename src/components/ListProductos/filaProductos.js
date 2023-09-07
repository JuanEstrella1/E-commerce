import React from "react";
import Card from "../card/card";
import "./filaProductos.css";

function FilaProductos() {
  return (
    <section className="sectionFila">
      <div className="containerFila">
        <h1 class="tituloFila">Productos similares</h1>

        <div className="containerCards">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          
        </div>
      </div>
    </section>
  );
}

export default FilaProductos;
