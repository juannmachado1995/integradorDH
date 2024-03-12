import React, { useState, useEffect } from 'react';
import ProductosRegistrar from '../../routes/Admin/Productos/ProductosRegistrar';
import ProductRegistration from '../Products/ProductRegistration'
import './button.css';
import axios from 'axios';
import { useMediaQuery } from "@mui/material";
import { Link } from 'react-router-dom';

const ProductoManejador = () => {
  /*
  const isSmallScreen = useMediaQuery('(max-width:670px)');

  if (isSmallScreen) {
    
   return alert("La pantalla es demasiado pequeña");
   
  }
  */

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
  }, []);


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
      {showAddForm && <ProductosRegistrar onSubmit={handleListClick} currentProduct={currentProduct} />}

      {productos.length > 0 && !showAddForm && (
        <div className="productos-container">
          <h1>Listado de Productos</h1>
          <ul className="productos-list">
            {productos.map(producto => (

              <li key={producto.id} className="producto-item">

                <div className=''>
                <h2 className="producto-nombre">NOMBRE PRODUCTO: {producto.nombre}</h2>
                <p className="producto-descripcion">DESCRIPCION: {producto.descripcion}</p>
                <p className="producto-id">ID PRODUCTO: {producto.id}</p>
                </div>
                <ul className="imagenes-list">
                  {producto.imagenes.map(imagen => (
                    <li key={imagen.id} className="imagen-item">
                      <img src={imagen.urlImg} alt={imagen.titulo} className="imagen" />
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProductoManejador;
