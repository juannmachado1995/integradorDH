import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ContextGlobal } from '../utils/global.context';
import './cardCiclasHome.css'
import { FaHeart } from 'react-icons/fa';

const CardBicicleta = () => {
  const { contexto, setContexto } = useContext(ContextGlobal);
  const [nuevosProductos, setNuevosProductos] = useState([]);

  useEffect(() => {
    const manejadorProductos = async () => {
      try {
        const response = await axios.get('http://localhost:8080/productos/listar');
        setNuevosProductos(response.data);
      } catch (error) {
        console.error('Error al obtener productos:', error);
      }
    };

    manejadorProductos();
  }, []);

  useEffect(() => {
    setNuevosProductos(contexto.arrayCiclas);
  }, [contexto.arrayCiclas]);




  //logica para guardar favoritos en local storage


  useEffect(() => {
    const productosFavoritosGuardados = JSON.parse(localStorage.getItem('productosFavoritos'));
    if (productosFavoritosGuardados) {
      setNuevosProductos(nuevosProductos.map((producto) => ({
        ...producto,
        favorito: productosFavoritosGuardados.includes(producto.id)
      })));
      console.log("Productos favoritos guardados:", productosFavoritosGuardados);
    }
  }, []);

  const toggleFavorito = (idProducto) => {
    const nuevosProductosActualizados = nuevosProductos.map((producto) =>
      producto.id === idProducto ? { ...producto, favorito: !producto.favorito } : producto
    );
    setNuevosProductos(nuevosProductosActualizados);
    const productosFavoritos = nuevosProductosActualizados
      .filter((producto) => producto.favorito)
      .map((producto) => ({ id: producto.id, nombre: producto.nombre }));
      localStorage.setItem('productosFavoritos', JSON.stringify([
        { id: 1, nombre: 'Producto 1' },
        { id: 2, nombre: 'Producto 2' },
        { id: 3, nombre: 'Producto 3' }
      ]));
  };



  return (
    <div>
      <h3 className='titulos'>Recomendaciones</h3>
        <div className='div-card-producto'>
          {nuevosProductos.map((producto, index) => (
            <Link to={'/productos/' + producto.id} key={index} className='wrapper-card-producto-home'>
              <article className='card-producto-home'>
                <img className='image-ciclas-home' src={producto.imagenes[0].urlImg} alt={producto.nombre} />
                <div className='titulo-card-container'>
                  <span>{producto.nombre}</span>
          
                </div>
                
                <FaHeart
                className={producto.favorito ? 'icono-favorito' : 'icono-no-favorito'}
                onClick={(e) => {
                  e.preventDefault(); // Prevenir que el enlace sea seguido
                  toggleFavorito(producto.id);
                }}
              />
              </article>
            </Link>
          ))}
        </div>
    </div>
  );
};

export default CardBicicleta;
