import React from "react";
import { useState, useEffect } from "react";
import { buscar, eliminarProducto, actualizarProducto } from "../../apis/apis";
import { Link } from "react-router-dom";
import {BiEditAlt} from "react-icons/bi"
import {MdDelete} from "react-icons/md"
import "./totalProductos.css"

function TotalProductos({ url }) {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    buscar(url, setProductos);
  }, [url]);

  return (
    <section className="sectionTotalProductos">
      <div className="containerProductos">
      {productos.map((producto) => {
        const { nombreProducto, precioProducto,urlImagen, id } = producto;
        return (
          <div className="card">
            <BiEditAlt className="edit"/>
            <MdDelete className="delete" onClick={()=>{
              eliminarProducto(id)
            }}/>
            <img
              src={urlImagen}
              alt="imgCard"
              className="imgCard"
            />
            <div className="informacionCard">
              <h1 className="tituloCard">{nombreProducto}</h1>
              <h3 className="precioCard">$ {precioProducto} </h3>
              <Link to={`/productos/${id}`} className="vinculoCard">
                Ver producto
              </Link>
            </div>
          </div>
        );
      })}
      </div>
    </section>
  );
}

export default TotalProductos;
