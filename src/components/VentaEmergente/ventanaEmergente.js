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
        if ((validacionCategoria === false )&&
      (validacionNombre === false) &&
      (validacionPrecio === false)&&
      (validacionUrl === false)
      ){
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
          props.mostrarActualizar(false)
        } catch (error) {
          console.error("Error al crear el elemento:", error);
        }
      }
    else{
      alert('Debe llenar todos los campos')  ;
    }};


////////// Codigo para la validacion de los campos a rellenar
const [validacionUrl,setValidacionUrl]= useState (false)
const [validacionCategoria,setValidacionCategoria]= useState (false)
const [validacionNombre,setValidacionNombre]= useState (false)
const [validacionPrecio,setValidacionPrecio]= useState (false)

  /////////// validacion de formulario vacio

  const validarFormulario = () => {
    formulario.nombreProducto === "" && setValidacionNombre(true);
    formulario.precio === "" && setValidacionPrecio(true);
    formulario.urlImg === "" && setValidacionUrl(true);
    formulario.categoria === "" && setValidacionCategoria(true);
    
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
            error = {validacionUrl}
            helperText = {validacionUrl && "Este campo no puede quedar vacio"}
            onChange={handleChange}
          onBlur={(e)=>{console.log(e.target.value)
            e.target.value==="" ? setValidacionUrl(true)
              :setValidacionUrl(false)}}
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
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
            label="Nombre del Producto"
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
            label="Precio"
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
          <button className="btnAgregarProducto" type="submit" onClick={validarFormulario}>
            Actualizar Producto
          </button>
        </form>
      </div>
    </div>
  );
}

export default VentanaEmergente;
