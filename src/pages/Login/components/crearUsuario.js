import React from "react";
import { useState } from "react";
import { TextField } from "@mui/material";
import { crearUsuario } from "../../../apis/apis";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import "./crearUsuario.css";

function CrearUsuario() {
  const navigate = useNavigate();
  const [validacionCrearUsuario, setValidacionCrearUsuario] = useState(false);

  //////// Actualizacion de el formulario completo
  const [Usuario, setUsuario] = useState({
    id:"",
    nombre: "",
    apellido: "",
    correo: "",
    contraseña: "",
    telefono: "",
    direccion: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setUsuario({ ...Usuario, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      validacionCorreo === false &&
      validacionContraseña === false &&
      validacionNombre === false &&
      validacionApellido === false
    ) {
      try {
        await crearUsuario(Usuario);
        setUsuario({
          id:"",
          correo: "",
          contraseña: "",
          nombre: "",
          telefono: "",
          direccion: "",
        });
        navigate("/login");
      } catch (error) {
        console.error("Error al crear el elemento:", error);
      }
    } else {
      setValidacionCrearUsuario(true)
    }
  };

  ////////// Codigo para la validacion de los campos a rellenar
  const [validacionCorreo, setValidacionCorreo] = useState(false);
  const [validacionContraseña, setValidacionContraseña] = useState(false);
  const [validacionNombre, setValidacionNombre] = useState(false);
  const [validacionApellido, setValidacionApellido] = useState(false);

  /////////// validacion de formulario vacio

  const validarFormulario = () => {
  Usuario.nombre === "" && setValidacionNombre(true);
  Usuario.apellido === "" && setValidacionApellido(true);
  Usuario.contraseña === "" && setValidacionContraseña(true);
  Usuario.correo === "" && setValidacionCorreo(true); 
  
  };

  /////////// objeto de mensajes de error



  ////////// Funcion para mensajes helper text

 /*  const mensajeHelper = (validacion) => {
    validacion === "hola" && mensajes.vacio
  } */

  return (
    <section className="sectionCrearUsuario">
      <div className="containerCrearUsuario">
        <form onSubmit={handleSubmit}>
          <h1 className="tituloCrearUsuario">Registro Usuario</h1>
          {validacionCrearUsuario && (
          <div className="creacionFallida">
            <p className="mensajeCreacionFallida">
              * Los campos con ( * ) son obligatoriso  <br/>
              * El correo debe contener @  <br/>
              * La contraseña debe contener entre 6 y 32 caracteres <br/>
             * Al menos 1 numero, 1 mayuscula, 1 minuscula y tener  <br/>
            </p>
          </div>
        )}
          <div className="containerNombreApellido">
            <TextField
              fullWidth
              label="Nombre *"
              id="fullWidth"
              margin="dense"
              name="nombre"
              error={validacionNombre}
              onChange={handleChange}
              onBlur={(e) => {
                console.log(e.target.value);
                e.target.value === ""
                  ? setValidacionNombre(true)
                  : setValidacionNombre(false);
              }}
            />
            <TextField
              fullWidth
              label="Apellido *"
              id="fullWidth"
              margin="dense"
              name="apellido"
              error={validacionApellido}
              onChange={handleChange}
              onBlur={(e) => {
                console.log(e.target.value);
                e.target.value === ""
                  ? setValidacionApellido(true)
                  : setValidacionApellido(false);
              }}
            />
          </div>
          <TextField
            fullWidth
            label="Correo *"
            id="fullWidth"
            margin="dense"
            name="correo"
            error={validacionCorreo}
            onChange={handleChange}
            onBlur={(e) => {
              console.log(e.target.value);
              e.target.value === ""
                ? setValidacionCorreo(true)
                : !e.target.value.includes("@")
                ? setValidacionCorreo(true)
                : setValidacionCorreo(false);
            }}
          />
          <FormControl variant="outlined" fullWidth id="contraseña" >
            <InputLabel htmlFor="outlined-adornment-password" >
              Contraseña *
            </InputLabel>
            <OutlinedInput
              error={validacionContraseña}
              
              onChange={handleChange}
              onBlur={(e) => {
                console.log(e.target.value);
                e.target.value === ""
                  ? setValidacionContraseña(true)
                  : setValidacionContraseña(false);
              }}
              name="contraseña"
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end" >
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(true)}
                    onMouseDown={() => setShowPassword(false)}
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
         
            <button
              className="btnCrearUsuario"
              type="submit"
              onClick={()=>{validarFormulario()

              }}>
              Crear Cuenta
            </button>
        </form>
      </div>
    </section>
  );
}

export default CrearUsuario;
