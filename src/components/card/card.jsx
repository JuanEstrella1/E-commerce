import React from "react";
import "./card.css"
import { Link } from "react-router-dom";


function Card(props) {

 const {nombre,precio,url,id,} = props 
 

  return (
    <section>
      <div className="card">
        
        <img
          src={url}
          alt="imgCard"
          className="imgCard"
          
        />
        
        <div className="informacionCard">
        <h1 className="tituloCard">{nombre}</h1>
        <h3 className="precioCard">$ {precio}</h3>
       <Link to={`/productos/${id}`} className="vinculoCard">Ver producto</Link>
        
        </div>
      </div>
    </section>
  );
}

export default Card;