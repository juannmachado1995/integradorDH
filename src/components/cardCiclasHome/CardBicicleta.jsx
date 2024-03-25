import React,{useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ContextGlobal } from '../utils/global.context';
import './cardCiclasHome.css'


const CardBicicleta = (props) => {

  const {contexto, setContexto} = useContext(ContextGlobal);
  const [nuevosProductos, setNuevosProductos] = useState([]);
  const nuevaBici = nuevosProductos.map(producto => ({
    nombreBici: producto.nombre,
    imgBici: producto.imagenes[0].urlImg
  }));


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

  const [ciclaleatoria, setCiclaleatoria] = useState([]);

  useEffect(() => {
    const nuevaBici = nuevosProductos.map(producto => ({
      id: producto.id,
      nombreBici: producto.nombre,
      imgBici: producto.imagenes[0].urlImg
    }));

    const ciclasConNuevosProductos = [...nuevaBici];

    const shuffledCiclas = ciclasConNuevosProductos.slice().sort(() => Math.random() - 0.5);
    setCiclaleatoria(shuffledCiclas);
  }, [nuevosProductos]);

  useEffect(()=>{
    setNuevosProductos(contexto.arrayCiclas);
  }, [contexto.arrayCiclas]);
  
  return (
    <div>
      <h3 className='titulos'>Recomendaciones</h3>
      <div className='div-card-producto'>
        {ciclaleatoria.map((cicla, index) => (
          <Link to={'/productos/' + cicla.id} key={index} className='wrapper-card-producto-home'>
          <article className='card-producto-home'>
            <img className='image-ciclas-home' src={cicla.imgBici} alt={cicla.nombreBici} />
            <span>{cicla.nombreBici}</span>
          </article>
          </Link>
        
        ))}
      </div>
    </div>
  )
}

export default CardBicicleta