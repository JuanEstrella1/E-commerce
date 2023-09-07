import React from "react";
import { TextField } from "@mui/material";
import "./nuevoProducto.css"


function NuevoProducto() {


    return (
        <section>
            <div className="containerNuevoProducto">
                <form>
                    <h1 className="tituloNurvoProducto">Agregar nuevo producto</h1>
                    
                    <TextField fullWidth label="Url de la imgaen" id="fullWidth" margin="dense"/>
                    <TextField fullWidth label="Categoria" id="fullWidth" margin="dense"/>
                    <TextField fullWidth label="Nombre del Producto" id="fullWidth" margin="dense"/>
                    <TextField fullWidth label="Precio" id="fullWidth" margin="dense" />
                    <TextField fullWidth label="Descripción del producto" id="outlined-multiline-static" margin="dense" multiline rows={3} />
                    <button className="btnAgregarProducto" onSubmit="">Agregar Producto</button>
                </form>
            </div>
        </section>
    )
}


export default NuevoProducto