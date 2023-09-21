import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5001/",
});

export const buscar = async (url, setData) => {
  const respuesta = await api.get(url);
  setData(respuesta.data);
};

////////////////// Create // POST

export const crearProductos = async (data) => {
  console.log(data)
  const {nombreProducto,urlImg,descripcion,precio,categoria} = data
  console.log(categoria)
    try {const response =  await fetch("http://localhost:5001/productos", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      nombreProducto:nombreProducto,
      categorias:categoria,
      urlImagen:urlImg,
      precioProducto:precio,
      descripcion:descripcion
    })});
    const nuevoElemento = await response.json();
    console.log('Elemento creado:', nuevoElemento);
  } catch (error) {
    console.error('Error al crear el elemento:', error);
  }
};


//////////////// Delete // delete

export const eliminarProducto = async(id) => {
  try {
    const response = await fetch(`http://localhost:5001/productos/${id}`, {
      method: 'DELETE',
    });
    const resultado = await response.json();
    console.log('Elemento eliminado:', resultado);
  } catch (error) {
    console.error('Error al eliminar el elemento:', error);
  }
}


//////////////// Upload // upload

export const actualizarProducto = async (id, data) => {
  const {nombreProducto,urlImg,descripcion,precio,categoria} = data
  try {
    const response = await fetch(`http://localhost:5001/productos/${id}`, {
      method: 'PUT', // O 'PATCH' dependiendo de tu API
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nombreProducto:nombreProducto,
        categorias:categoria,
        urlImagen:urlImg,
        precioProducto:precio,
        descripcion:descripcion
      })});
    const elementoActualizado = await response.json();
    console.log('Elemento actualizado:', elementoActualizado);
  } catch (error) {
    console.error('Error al actualizar el elemento:', error);
  }
}


///////////////////////////////
//  APIS USUARIOS    ///

///////////// READ USUARIO  

export const buscarUsuarios = async (url, setData) => {
  const respuesta = await api.get(url);
  setData(respuesta.data);
};


///////////// CREATE USUARIO

export const crearUsuario = async (data) => {
    try {const response =  await fetch("http://localhost:5001/usuarios", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data)});
    const nuevoElemento = await response.json();
    console.log('Elemento creado:', nuevoElemento);
  } catch (error) {
    console.error('Error al crear el elemento:', error);
  }
};





