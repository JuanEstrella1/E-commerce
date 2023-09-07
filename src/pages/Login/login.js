import React from "react";
import { TextField } from "@mui/material";
import "./login.css"


function Login() {


    return (
        <section className="containerSectionLogin">
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
                <button className="btnSingUP" onSubmit="">Crear cuenta nueva</button>

            </div>
        </section>
    )
}


export default Login