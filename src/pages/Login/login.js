import React, { useEffect } from "react";
import { TextField } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { buscarUsuarios } from "../../apis/apis";

import "./login.css";

function Login() {
  ///////invocar base de datos de usuarios.
  const [usuarios, setUsuarios] = useState([]);
  const [validacionLogin, setValidacionLogin] = useState(false);
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    correo: "",
    contraseña: "",
  });

  useEffect(() => {
    buscarUsuarios("/usuarios", setUsuarios);
  }, [usuarios]);

  const [showPassword, setShowPassword] = useState(false);
  const [errorCorreo, setErrorCorreo] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setLogin({ ...login, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(login)
    usuarios.map((usuario) => {
      if (
        usuario.correo === login.correo &&
        usuario.contraseña === login.contraseña
      ) {
         setValidacionLogin(false);
         return navigate("/");
        
      } else {
         return setValidacionLogin(true);
      }
    });
  };

  return (
    <section className="containerSectionLogin">
      <div className="containerLogin">
        {validacionLogin && (
          <div className="sesionFallida">
            <p className="mensajeSesionFallida">
              El correo o la contraseña proporcionados <br /> son incorrectos
            </p>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <h1 className="tituloLogin">Iniciar Sesión</h1>
          <TextField
            fullWidth
            label="Correo"
            id="fullWidth"
            margin="normal"
            name="correo"
            error={errorCorreo}
            helperText={
              errorCorreo &&
              "Ingrese un correo electrónico válido (nombre@ejemplo.com)"
            }
            onChange={(e) => {
              const { name, value } = e.target;
              value.length > 2 && !value.includes("@")
                ? setErrorCorreo(true)
                : setErrorCorreo(false);
              setLogin({ ...login, [name]: value });
            }}
          />
          <FormControl variant="outlined" fullWidth id="contraseña">
            <InputLabel htmlFor="outlined-adornment-password">
              Contraseña
            </InputLabel>
            <OutlinedInput
              onChange={handleChange}
              name="contraseña"
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
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

          <button
            className="btnLogin">
            Entrar
          </button>
        </form>
        <div className="olvidoContraseña">
          <a href="/" className="olvidoContraseña">
            ¿Olvidates tu contraseña?
          </a>
        </div>
      </div>
      <div className="crearCuenta">
        <Link to="/crearUsuario">
          <button className="btnSingUP" type="submit">
            Crear cuenta nueva
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Login;
