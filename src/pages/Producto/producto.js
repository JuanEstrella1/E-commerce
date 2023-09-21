import React from "react";
import "./Producto.css";
import FilaProductos from "../../components/ListProductos/filaProductos";
import { buscar } from "../../apis/apis";
import { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import {IoBookmarkOutline} from "react-icons/io5"
import {AiOutlineShoppingCart} from "react-icons/ai"

function Producto() {
  const [productos, setProductos] = useState({});
  const navigate = useNavigate()

  const { precioProducto, nombreProducto, urlImagen, descripcion, categorias} = productos;
  let { id } = useParams();
  console.log(categorias)
  
  
  useEffect(() => {
    buscar(`/productos/${id}`, setProductos)
    .catch(()=>{
      navigate("/not-found")
    })

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
          <div className="containerBtnCompras">
            <button className="btnCompras" onSubmit="">
            <AiOutlineShoppingCart className="carShop"/>
            </button>
            <button className="btnCompras" onSubmit="">
            <IoBookmarkOutline className="iconListaDeseos"/><p className="listaDeseos"> Lista de deseos</p>
            </button>
          </div>
        </div>
      </div>
      <FilaProductos categoria={categorias} titulo={"Productos similares"}/>
    </section>
  );
}

export default Producto;
