import "./App.css";

import Navbar from "./components/navbar/nav";
import Footer from "./components/footer/footer";
import Inicio from "./pages/Inicio/inicio";
import TotalProductos from "./pages/totalProductos/totalProductos";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>        
        <Route path="/" exact element={<Inicio />} />
        <Route path="/totalProductos" exact element={<TotalProductos />} />
      </Routes> 
      <Footer />
    </Router>
  );
}

export default App;
