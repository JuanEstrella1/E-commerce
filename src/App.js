import "./App.css";

import Navbar from "./components/navbar/nav";
import Footer from "./components/footer/footer";
import Inicio from "./pages/Inicio/inicio";
import TotalProductos from "./pages/totalProductos/totalProductos";
import NuevoProducto from "./pages/Nuevo_Producto/nuevoProducto";
import Login from "./pages/Login/login";
import Producto from "./pages/Producto/producto";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>        
        <Route path="/"  element={<Inicio />} />
        <Route path="/totalProductos"  element={<TotalProductos  url={"/productos"}/>} />
        <Route path="/NuevoProducto"  element={<NuevoProducto />} />
        <Route path="/Login"  element={<Login />} />
        <Route path={`/productos/:id`}  element={<Producto />} />
      </Routes> 
      <Footer />
    </Router>
  );
}

export default App;
