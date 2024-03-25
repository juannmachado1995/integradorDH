import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ContextGlobal } from '../utils/global.context';
import './cardCiclasHome.css'

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

  useEffect(()=>{
    setNuevosProductos(contexto.arrayCiclas);
  }, [contexto.arrayCiclas]);
  
  return (
    <div>
      <h3 className='titulos'>Recomendaciones</h3>
      <div className='div-card-producto'>
        {nuevosProductos.map((producto, index) => (
          <Link to={'/productos/' + producto.id} key={index} className='wrapper-card-producto-home'>
          <article className='card-producto-home'>
            <img className='image-ciclas-home' src={producto.imagenes[0].urlImg} alt={producto.nombre} />
            <span>{producto.nombre}</span>
          </article>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CardBicicleta;
