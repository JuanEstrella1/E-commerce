import React from "react";
import Card from "../card/card";
import "./filaProductos.css";
import { useEffect, useState } from "react";
import { buscar } from "../../apis/apis";
import { Link } from "react-router-dom";

function FilaProductos(props) {
  const { categoria, titulo } = props

  const [productos, setProductos] = useState([])

  ///// comandos para invocar la base de datos dentro del archivo

  useEffect(() => {
    buscar( "/db.json",setProductos)
  }, [productos])
  //// Creacion de un nuevo array exclusivamente con los objetos que cumplen la condicion de la categoria
  var arrProductos = []
  for (let i = 0; i < productos.length; i++) {
    if (productos[i].categorias === categoria) {
      arrProductos.push(productos[i])
    }
  }

  //////// definicion de estilos para modificación de los sliders ajustando el tamaño de la pantalla

  let anchoPantalla = window.innerWidth;
  return (
    <section className="sectionFila">
      <div className="containerFila">
        <div className="containerTituloFila">
          <h1 class="tituloFila">{titulo}</h1>
          <Link to={"/totalProductos"} className="verTodoFila">Ver todos</Link></div>
        <div className="containerCards">
          {arrProductos.map((producto, i) => {
            const { id, nombreProducto, precioProducto, urlImagen } = producto;

            return (
              <div key={id}>
                {/* {
                  //se crean las variables necesarias para poder modificar el slider en función al ancho y largo de la pantalla
                  (anchoPantalla < 1100) && (i > 3 && i < 5) ?
                    <Card nombre={nombreProducto}
                      precio={precioProducto}
                      url={urlImagen}
                      id={id}
                      estilos={esconder} />
                    : (i <= 5)  ? <Card nombre ={nombreProducto} 
                    precio ={precioProducto}
                    url ={urlImagen}
                    id ={id} 
                    index = {i}/>
                    : <></> 
              } */}
              {(anchoPantalla <= 1200)&&(i < 2) ? 
              <></> : 
              <Card nombre ={nombreProducto} 
            precio ={precioProducto}
            url ={urlImagen}
            id ={id} 
            index = {i}/>
             }
              </div>)
          })}
        </div>

      </div>
    </section>
  );
}

export default FilaProductos;
