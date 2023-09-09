import React from "react";
import {
  TextField,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import { useState, useEffect } from "react";
import { crearProductos } from "../../apis/apis";
import "./nuevoProducto.css";

function NuevoProducto() {
  ////////actualizaciones para cada campo
  /* const [urlImg, setUrlImg] = useState();
  const [categoria, setCategoria] = useState();
  const [nombreProducto, setNombreProducto] = useState();
  const [id, setId] = useState();
  const [precio, setPrecio] = useState();
  const [descripcion, setDescripcion] = useState(); */
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
      await crearProductos(formulario);
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

  useEffect(() => {
    console.log(formulario);
  }, [formulario]);

  return (
    <section>
      <div className="containerNuevoProducto">
        <form
          onSubmit={handleSubmit}
        >
          <h1 className="tituloNurvoProducto">Agregar nuevo producto</h1>

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
            label="Código"
            id="fullWidth"
            margin="dense"
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
            Agregar Producto
          </button>
        </form>
      </div>
    </section>
  );
}

export default NuevoProducto;
