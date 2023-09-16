import React from "react";
import {
  TextField,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { crearProductos } from "../../apis/apis";
import "./nuevoProducto.css";

function NuevoProducto() {
  //////// configuracion de la link cuando se crea un producto

  const navigate = useNavigate();

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
    setFormulario({ ...formulario, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      validacionCategoria === false &&
      validacionNombre === false &&
      validacionPrecio === false &&
      validacionUrl === false
    ) {
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
        navigate("/totalProductos");
      } catch (error) {
        console.error("Error al crear el elemento:", error);
      }
    } else {
      alert("Debe llenar todos los campos");
    }
  };

  /*   //////// invocacion de la base de datos

  useEffect(() => {
    console.log(formulario);
  }, [formulario]); */

  ////////// Codigo para la validacion de los campos a rellenar
  const [validacionUrl, setValidacionUrl] = useState(false);
  const [validacionCategoria, setValidacionCategoria] = useState(false);
  const [validacionNombre, setValidacionNombre] = useState(false);
  const [validacionPrecio, setValidacionPrecio] = useState(false);

  /////////// validacion de formulario vacio

  const validarFormulario = () => {
    formulario.nombreProducto === "" && setValidacionNombre(true);
    formulario.precio === "" && setValidacionPrecio(true);
    formulario.urlImg === "" && setValidacionUrl(true);
    formulario.categoria === "" && setValidacionCategoria(true);
  };

  return (
    <section>
      <div className="containerNuevoProducto">
        <form onSubmit={handleSubmit}>
          <h1 className="tituloNurvoProducto">Agregar nuevo producto</h1>

          <TextField
            fullWidth
            label="Url de la imgaen *"
            id="fullWidth"
            margin="dense"
            name="urlImg"
            error={validacionUrl}
            helperText={validacionUrl && "Este campo no puede quedar vacio"}
            onChange={handleChange}
            onBlur={(e) => {
              console.log(e.target.value);
              e.target.value === ""
                ? setValidacionUrl(true)
                : setValidacionUrl(false);
            }}
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Categoria *</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Categoria"
              name="categoria"
              error={validacionCategoria}
              onBlur={(e) => {
                console.log(e.target.value);
                e.target.value === undefined
                  ? setValidacionCategoria(true)
                  : setValidacionCategoria(false);
              }}
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
            label="Nombre del Producto *"
            id="fullWidth"
            margin="dense"
            name="nombreProducto"
            error={validacionNombre}
            helperText={validacionNombre && "Este campo no puede quedar vacio"}
            onBlur={(e) => {
              console.log(e.target.value);
              e.target.value === ""
                ? setValidacionNombre(true)
                : setValidacionNombre(false);
            }}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Precio *"
            id="fullWidth"
            margin="dense"
            name="precio"
            error={validacionPrecio}
            helperText={validacionPrecio && "Este campo no puede quedar vacio"}
            onBlur={(e) => {
              console.log(e.target.value);
              e.target.value === ""
                ? setValidacionPrecio(true)
                : setValidacionPrecio(false);
            }}
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
          <button
            className="btnAgregarProducto"
            type="submit"
            onClick={validarFormulario}
          >
            Agregar Producto
          </button>
        </form>
      </div>
    </section>
  );
}

export default NuevoProducto;
