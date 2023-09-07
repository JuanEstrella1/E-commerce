import React from "react";
import "./Producto.css"
import FilaProductos from "../../components/ListProductos/filaProductos";

function Producto() {
  return (
    <section className="sectionProducto">
      <div className="producto">
        <img
          src="https://http2.mlstatic.com/D_NQ_NP_853113-MCO46284545837_062021-O.webp"
          alt="Producto"
          className="imgProducto"
        />
        <div className="informacion">
        <h1 className="nombreProducto">The Island.</h1>
        <h3 className="precio">$ 184.278 </h3>
        <p className="descripcionProducto">
          The Island es un Juego de mesa entre 2 - 5 jugadores, donde el
          proposito es salvar a tu tripulación de una isla donde acaban de
          encallar, pero cuidado!. Existen diversas criaturas que pueden frustar
          tus intentos por llegar a tierra firme y hundir a tu tripulación.
        </p>
        <div >
        <button className="btnCompras" onSubmit="">Comprar</button>
        <button className="btnCompras" onSubmit="">Agregar al carrito</button></div>
        </div>
      </div>
      <FilaProductos />
    </section>
  );
}

export default Producto;
