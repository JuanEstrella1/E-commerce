import React from "react";
import { useState, useEffect } from "react";
import { buscar, eliminarProducto } from "../../apis/apis";
import { Link } from "react-router-dom";
import { BiEditAlt } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import VentanaEmergente from "../../components/VentaEmergente/ventanaEmergente";
import "./totalProductos.css";

function TotalProductos({ url }) {
  const [idProducto, setIdProducto] = useState();
  const [productos, setProductos] = useState([]);
  const [mostrarActualizar, setMostrarActualizar] = useState(false);

// Llama a la función para establecer la conexión a MongoDB Atlas

useEffect(() => {
  buscar(url, setProductos);
}, [productos,url]);

  return (
    <section className="sectionTotalProductos">
      <div className="containerTitulosTotalProductos">
        <h1>Total Productos</h1>
        <Link to="/nuevoProducto"><button className="btnTotalProductoNuevo">Agregar Producto</button></Link>
      </div>

      <div className="containerProductos">
        {mostrarActualizar && (
          <VentanaEmergente
            mostrarActualizar={setMostrarActualizar}
            id={idProducto}
          />
        )}
        {productos.map((producto) => {
          const { nombreProducto, precioProducto, urlImagen, id } = producto;/* 
          console.log(producto); */
          return (
            <div>
              <div className="card" key={nombreProducto}>
                <div className="containerIconosTotalProductos">
                  <BiEditAlt
                    className="edit"
                    onClick={() => {
                      setMostrarActualizar(true);
                      setIdProducto(id);
                    }}
                  />
                  <MdDelete
                    className="delete"
                    onClick={() => {
                      eliminarProducto(id);
                    }}
                  />
                </div>
                <img src={urlImagen} alt="imgCard" className="imgCard" />
                <div className="informacionCard">
                  <h1 className="tituloCard">{nombreProducto}</h1>
                  <h3 className="precioCard">$ {precioProducto} </h3>
                  <Link to={`/productos/${id}`} className="vinculoCard">
                    Ver producto
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default TotalProductos;
