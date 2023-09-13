import "./App.css";

import Navbar from "./components/navbar/nav";
import Footer from "./components/footer/footer";
import Inicio from "./pages/Inicio/inicio";
import TotalProductos from "./pages/totalProductos/totalProductos";
import NuevoProducto from "./pages/Nuevo_Producto/nuevoProducto";
import Login from "./pages/Login/login";
import Producto from "./pages/Producto/producto";
import CrearUsuario from "./pages/Login/components/crearUsuario";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>        
        <Route path="/"  element={<Inicio />} />
        <Route path="/totalProductos"  element={<TotalProductos  url={"/productos"}/>} />
        <Route path="/nuevoProducto"  element={<NuevoProducto />} />
        <Route path="/login"  element={<Login />} />
        <Route path={`/productos/:id`}  element={<Producto />} />
        <Route path="/crearUsuario"  element={<CrearUsuario />} />
      </Routes> 
      <Footer />
    </Router>
  );
}

export default App;
