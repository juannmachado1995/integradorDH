import React, { useState, useEffect } from 'react';
import FormProduct from '../Form/FormProduct';
import ProductRegistration from '../Products/ProductRegistration'
import './button.css';
import axios from 'axios';

const ProductoManejador = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null); // Nuevo estado para mantener el producto actual
  const [productos, setProductos] = useState([]);

  const handleAddClick = () => {
    setShowAddForm(!showAddForm);
    setCurrentProduct(null); // Reiniciar el producto actual al abrir el formulario
    console.log('showAddForm después de handleListClick:', showAddForm);
  };

  const handleListClick = async () => {
    try {
      const response = await axios.get('http://localhost:8080/productos/listar');
      console.log('Productos obtenidos:', response.data);
      setProductos(response.data);
    } catch (error) {
      console.error('Error al obtener productos:', error);
    }
  };

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await axios.get('http://localhost:8080/productos/listar');
        console.log('Productos obtenidos:', response.data);
        setProductos(response.data);
      } catch (error) {
        console.error('Error al obtener productos:', error);
      }
    };

    fetchProductos();
  }, []); // Se ejecuta solo una vez al montar el componente

  ;

  return (
    <div>

      <div className="container-admin">
        <button
          onClick={handleAddClick}>Agregar Producto
          <img src="./img/imgBoton.png" alt="Imagen del botón" className='iconButton' />
        </button>
        <button onClick={() => { setShowAddForm(false); handleListClick(); }}>
          Lista de Productos
          <img src="./img/imgBoton2.png" alt="Imagen del botón" className='iconButton' />
        </button>
      </div>
      {showAddForm && <FormProduct onSubmit={handleListClick} currentProduct={currentProduct} />}

      {productos.length > 0 && !showAddForm && (
        <div>
          <h1>Listado de Productos</h1>
          <ul>
            {productos.map(producto => (
              <li key={producto.id}>
                <h2>NOMBRE PRODUCTO: {producto.nombre}</h2>
                <p>DESCRIPCION: {producto.descripcion}</p>
                <p>ID PRODUCTO: {producto.id}</p>
                <h3>IMÁGENES:</h3>
                <ul>
                  {producto.imagenes.map(imagen => (
                    <li key={imagen.id}>
                      <img src={imagen.urlImg} alt={imagen.titulo} />
                      <p>{imagen.titulo}</p>
                    </li>

                  ))}
                </ul>
                <h1>---------------------------</h1>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProductoManejador;
