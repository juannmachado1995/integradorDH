import React, { useState } from 'react';
import FormProduct from '../Form/formProduct';
import ProductRegistration from '../Products/productRegistration';



/*codigo que contiene el container con botones de agregar producto y listar productos*/ 


import './button.css'; 

const ProductManagement = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(null); // Nuevo estado para mantener el producto actual
  


  const handleAddClick = () => {
   setShowAddForm(!showAddForm);
   setCurrentProduct(null); // Reiniciar el producto actual al abrir el formulario
   console.log('showAddForm después de handleListClick:', showAddForm);
  };

  
  const handleListClick = (newProduct) => {
    setProducts([...products, newProduct]);
    setShowAddForm(false); // Cierra el formulario después de agregar el producto
    setCurrentProduct(newProduct); // Al agregar un producto, establecerlo como el producto actual
    console.log('Mostrar lista de productos');
  };

  return (
    <div>
    
      <div className="container-admin">
        <button 
        onClick={handleAddClick}>Agregar Producto
        <img src="./img/imgBoton.png" alt="Imagen del botón" className='iconButton' />
        </button>
        <button  onClick={() => setShowAddForm(false)}>Lista de Productos
        
        <img src="./img/imgBoton2.png" alt="Imagen del botón" className='iconButton' />
        
        </button>
      </div>
      {showAddForm && <FormProduct onSubmit={handleListClick} currentProduct={currentProduct}/>}

      {products.length > 0 && !showAddForm && (
        <div  className="product-list">
          <h2>Lista de Productos:</h2>
          <table className='table'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Descripcion</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={index}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td>
                    <img
                      src="./img/delete.png"
                      alt="Eliminar"
                      className="delete-icon"
                      
                    />
                  </td>
          </tr>
        ))}
      </tbody>
    </table>
        </div>
      )}
    </div>
  );
};

export default ProductManagement;
