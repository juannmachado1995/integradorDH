import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const CardBicicleta = (props) => {

  const [nuevosProductos, setNuevosProductos] = useState([]);
  const nuevaBici = nuevosProductos.map(producto => ({
    nombreBici: producto.nombre,
    urlImg: producto.imagenes[0].urlImg
}));
  const manejadorProductos = async () => {
      try {
          const response = await axios.get('http://localhost:8080/productos/listar');
          console.log('Productos obtenidos:', response.data);
          setNuevosProductos(response.data);
      } catch (error) {
          console.error('Error al obtener productos:', error);
      }
  };

  const [ciclaleatoria, setCiclaleatoria] = useState([]);

  useEffect(() => {
    manejadorProductos();
    const ciclas = [{
      nombreBici: 'Haibike Bicicleta Eléctrica Adventr FS 9',
      imgBici: 'https://i.imgur.com/OFuVyJt.png'
    },
    {
      nombreBici: 'Wilier Bicicleta Eléctrica Triestina Hybrid GRX812',
      imgBici: 'https://i.imgur.com/oO2sILV.png'
    }
    ,
    {
      nombreBici: 'Bianchi Bicicleta Eléctrica E-Spillo Classic G Altus',
      imgBici: 'https://i.imgur.com/370InV6.png'
    }
    ,
    {
      nombreBici: 'Haibike Bicicleta Eléctrica MTB Alltrail',
      imgBici: 'https://i.imgur.com/IccTsb0.png'
    }
    ,
    {
      nombreBici: 'Youin Bicicleta Eléctrica Plegable Dakar',
      imgBici: 'https://i.imgur.com/kSLWt3a.png'
    }
    ,
    {
      nombreBici: 'Winora Bicicleta Eléctrica Tria X9 Wave',
      imgBici: 'https://i.imgur.com/UfRt2hz.png'
    }
    ,
    {
      nombreBici: 'Bianchi Bicicleta Eléctrica Gravel E-Impulso Ultegra RD-R8000 2021',
      imgBici: 'https://i.imgur.com/Ou8g9TW.png'
    }
    ,
    {
      nombreBici: 'Montana Bikes Bicicleta Eléctrica Carretera Gavia',
      imgBici: 'https://i.imgur.com/fNgTMbJ.png'
    }];

    const ciclasConNuevosProductos = [...ciclas, ...nuevaBici];

    const shuffledCiclas = ciclasConNuevosProductos.slice().sort(() => Math.random() - 0.5);
    setCiclaleatoria(shuffledCiclas);
  }, []);

  const handleClick = (cicla) => {
    props.onProductoSeleccionado(cicla);
  };
  
  return (
    <div>
      <h3 className='titulos'>Recomendaciones</h3>
      <div className='div-card-producto'>
        {ciclaleatoria.map((cicla, index) => (
          
          <article className='card-producto-home' key={index} onClick={() => handleClick(cicla)}>
            <img className='image-ciclas-home' src={cicla.imgBici} alt={cicla.nombreBici} />
            <span>{cicla.nombreBici}</span>
          </article>
        
        ))}
      </div>
    </div>
  )
}

export default CardBicicleta