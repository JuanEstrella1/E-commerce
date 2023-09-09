import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3001/",
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
    try {const response =  await fetch("http://localhost:3001/productos", {
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



/*     
  }).then((respuesta) => {
    console.log(respuesta)
    if (respuesta.ok) {
      return respuesta.body;
    }
  }); */
};
