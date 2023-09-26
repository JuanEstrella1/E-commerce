import React from "react";
import "./Producto.css";
import FilaProductos from "../../components/ListProductos/filaProductos";
import { buscar } from "../../apis/apis";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IoBookmarkOutline } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Producto() {
  const [productos, setProductos] = useState([]);
  const [producto, setProducto] = useState([]);
  const { precioProducto, nombreProducto, urlImagen, descripcion, categorias } =  producto;

  const navigate = useNavigate();

  let { id } = useParams();
  let num = parseInt(id);
  console.log(num)

  ////////////////// redireccionamiento cuando no se encuentra el producto
  num > productos.length && navigate("/not-found");

  ////////////////////////////// lectura de datos desde las api
  useEffect(() => {
    buscar(`/db.json`, setProductos);
    /* .catch(()=>{
      navigate("/not-found")
    }) */
    
  }, [id]);

  /////////////////////// individualizacion del producto especifico
  useEffect(() => {
    const productoEncontrado = productos.find((producto) => producto.id === num);
    if (productoEncontrado) {
      setProducto(productoEncontrado);
    }
  }, [num, productos]);

  console.log(producto);
  


  return (
    <section className="sectionProducto">
      <div className="producto">
        <div className="containerImgProducto">
          <img src={urlImagen} alt="Producto" className="imgProducto" />
        </div>
        <div className="informacion">
          <h1 className="nombreProducto">{nombreProducto}</h1>
          <h3 className="precio">$ {precioProducto} </h3>
          <p className="descripcionProducto">{descripcion}</p>
          <div className="containerBtnCompras">
            <button className="btnCompras" onSubmit="">
              <AiOutlineShoppingCart className="carShop" />
            </button>
            <button className="btnCompras" onSubmit="">
              <IoBookmarkOutline className="iconListaDeseos" />
              <p className="listaDeseos"> Lista de deseos</p>
            </button>
          </div>
        </div>
      </div>
      <FilaProductos categoria={categorias} titulo={"Productos similares"} />
    </section>
  );
}

export default Producto;
