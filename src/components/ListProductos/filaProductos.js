import React from "react";
import Card from "../card/card";
import "./filaProductos.css";
import { useEffect, useState } from "react";
import { buscar } from "../../apis/apis";

function FilaProductos(props) {
  const { categoria, titulo } = props

  const [productos, setProductos] = useState([])

  useEffect(() => {
    buscar("/productos", setProductos)
  }, [productos])

  return (
    <section className="sectionFila">
      <div className="containerFila">
        <h1 class="tituloFila">{titulo}</h1>
        <div className="containerCards">
        {productos.map((producto) => {
            const {categorias,id,nombreProducto,precioProducto,urlImagen} = producto;
            
          return (
            <div  key={id}>
            {categorias === categoria ? <Card nombre ={nombreProducto} 
            precio ={precioProducto}
            url ={urlImagen}
            id ={id} />: <></>}
           </div>
)
        })}
         </div>
        
      </div>
    </section>
  );
}

export default FilaProductos;
