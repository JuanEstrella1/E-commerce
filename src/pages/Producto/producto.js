import React from "react";
import "./Producto.css";
import FilaProductos from "../../components/ListProductos/filaProductos";
import { buscar } from "../../apis/apis";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Producto() {
  const [productos, setProductos] = useState({});

  const { precioProducto, nombreProducto, urlImagen, descripcion} = productos;
  let { id } = useParams();
  
  
  useEffect(() => {
    buscar(`/productos/${id}`, setProductos);
  }, [id]);
  console.log(precioProducto)

  return (
    <section className="sectionProducto">
      <div className="producto">
        <div className="containerImgProducto">
        <img
          src={urlImagen}
          alt="Producto"
          className="imgProducto"
        />
        </div>
        <div className="informacion">
          <h1 className="nombreProducto">{nombreProducto}</h1>
          <h3 className="precio">$ {precioProducto} </h3>
          <p className="descripcionProducto">
            {descripcion}
          </p>
          <div>
            <button className="btnCompras" onSubmit="">
              Comprar
            </button>
            <button className="btnCompras" onSubmit="">
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
      <FilaProductos />
    </section>
  );
}

export default Producto;
