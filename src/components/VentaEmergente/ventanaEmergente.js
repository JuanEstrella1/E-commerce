import React from "react";
import { useState } from "react";
import "./ventanEmergente.css";
import {AiFillCloseCircle} from "react-icons/ai"
import {
    TextField,
    InputLabel,
    Select,
    MenuItem,
    FormControl,
  } from "@mui/material";
  import { actualizarProducto } from "../../apis/apis";


function VentanaEmergente(props) {
console.log(props)
    const [categoria, setCategoria] = useState();
   


    //////// Actualizacion de el formulario completo
    const [formulario, setFormulario] = useState({
      urlImg: "",
      categoria: "",
      nombreProducto: "",
      id: "",
      precio: "",
      descripcion: "",
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(value);
        setFormulario({ ...formulario, [name]: value });
      };
    
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await actualizarProducto(props.id,formulario);
          setFormulario({
            urlImg: "",
            categoria: "",
            nombreProducto: "",
            id: "",
            precio: "",
            descripcion: "",
          });
        } catch (error) {
          console.error("Error al crear el elemento:", error);
        }
      };



  return (
    <div className="ventanaModal">
      <div className="contenidoVentanaModal">
      <div className="contenedorIconoCerrar">
      <AiFillCloseCircle className="iconoCerrar" onClick={()=> props.mostrarActualizar(false)}/></div>
      <form
          onSubmit={handleSubmit}
        >
          <h1 className="tituloActualizarProducto">Actualizar producto</h1>

          <TextField
            fullWidth
            label="Url de la imgaen"
            id="fullWidth"
            margin="dense"
            name="urlImg"
            onChange={ handleChange}
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={categoria}
              label="Categoria"
              name="categoria"
              onChange={handleChange}
            >
              <MenuItem value={""} disabled defaultValue="" hidden>
                Seleccionar equipo
              </MenuItem>
              <MenuItem value={"videojuegos"}>Videojuegos</MenuItem>
              <MenuItem value={"consola"}>Consolas</MenuItem>
              <MenuItem value={"boardgame"}>Boardgame</MenuItem>
            </Select>
          </FormControl>

          <TextField
            fullWidth
            label="Nombre del Producto"
            id="fullWidth"
            margin="dense"
            name="nombreProducto"
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Precio"
            id="fullWidth"
            margin="dense"
            name="precio"
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Descripción del producto"
            id="outlined-multiline-static"
            margin="dense"
            name="descripcion"
            multiline
            rows={3}
            onChange={handleChange}
          />
          <button className="btnAgregarProducto" type="submit">
            Actualizar Producto
          </button>
        </form>
      </div>
    </div>
  );
}

export default VentanaEmergente;
