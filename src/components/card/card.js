import React from "react";
import "./card.css"

function Card() {
  return (
    <section className="sectionCard">
      <div className="card">
        <img
          src="https://http2.mlstatic.com/D_NQ_NP_853113-MCO46284545837_062021-O.webp"
          alt="imgCard"
          className="imgCard"
        />
        <div className="informacionCard">
        <h1 className="tituloCard">The Island.</h1>
        <h3 className="precioCard">$ 184.278 </h3>
        <a href="/" className="vinculoCard">Ver producto</a>
        
        </div>
      </div>
    </section>
  );
}

export default Card;