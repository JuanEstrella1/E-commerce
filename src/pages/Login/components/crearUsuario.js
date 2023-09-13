import React from "react";
import { useState } from "react";
import { TextField } from "@mui/material";
import { crearUsuario } from "../../../apis/apis";
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link } from "react-router-dom";
import "./crearUsuario.css"


function CrearUsuario() {


    //////// Actualizacion de el formulario completo
    const [Usuario, setUsuario] = useState({
      nombre: "",
      apellido: "",
      correo: "",
      contraseña: "",
      telefono: "",
      direccion: "",
    });
    const [showPassword,setShowPassword] = useState(false)


    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(value);
        setUsuario({ ...Usuario, [name]: value });
      };
    
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await crearUsuario(Usuario);
          setUsuario({
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
    <section className="sectionCrearUsuario">
      <div className="containerCrearUsuario">
      <form
          onSubmit={handleSubmit}
        >
          <h1 className="tituloCrearUsuario">Registro Usuario</h1>
          <div className="containerNombreApellido"> 
            <TextField
            fullWidth
            label="Nombre"
            id="fullWidth"
            margin="dense"
            name="nombre"
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Apellido"
            id="fullWidth"
            margin="dense"
            name="apellido"
            onChange={handleChange}
          /></div>
          <TextField
            fullWidth
            label="Correo"
            id="fullWidth"
            margin="dense"
            name="correo"
            onChange={ handleChange}
          />
          <FormControl variant="outlined" fullWidth id="contraseña">
          <InputLabel htmlFor="outlined-adornment-password">Contraseña</InputLabel>
          <OutlinedInput  onChange={handleChange} name="contraseña"
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end" >
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={()=>setShowPassword(true)}
                  onMouseDown={()=>setShowPassword(false)}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
         
          <TextField
            fullWidth
            label="Dirección"
            id="fullWidth"
            margin="dense"
            name="direccion"
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Telefóno"
            id="fullWidth"
            margin="dense"
            name="telefono"
            onChange={handleChange}
          />
          <Link to="/login">
          <button className="btnCrearUsuario" type="submit">
            Crear Cuenta
          </button>
          </Link>
        </form>
      </div>
    </section>
  );
}

export default CrearUsuario;
