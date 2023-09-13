import React from "react";
import { TextField } from "@mui/material";
import { useState } from "react";
import VentanaRegistro from "./components/crearUsuario";
import { Link } from "react-router-dom";
import "./login.css"


function Login() {

    const [crearCuenta,setCrearCuenta] = useState(false)


    return (
        <section className="containerSectionLogin">
            {crearCuenta && <VentanaRegistro mostrarCrear ={setCrearCuenta}/>}
            <div className="containerLogin">
                <form>
                    <h1 className="tituloLogin">Iniciar Sesión</h1>

                    <TextField fullWidth placeholder="Escriba su correo electrónico" id="fullWidth" margin="dense" />
                    <TextField fullWidth placeholder="Escriba su contraseña" id="fullWidth" margin="dense" />

                    <button className="btnLogin" onSubmit="">Entrar</button>

                </form>
                <div className="olvidoContraseña">
                <a href="/"className="olvidoContraseña">¿Olvidates tu contraseña?</a>
                </div>

            </div>
            <div className="crearCuenta">
                <Link to="/crearUsuario">
                <button className="btnSingUP" onClick={()=>setCrearCuenta(true)}>Crear cuenta nueva</button>
                </Link>
            </div>
        </section>
    )
}


export default Login