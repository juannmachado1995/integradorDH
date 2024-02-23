import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const CardBicicleta = (props) => {

  const [ciclaleatoria, setCiclaleatoria] = useState([]);

  useEffect(() => {
    const ciclas = [  {
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
    const shuffledCiclas = ciclas.slice().sort(() => Math.random() - 0.5);
    setCiclaleatoria(shuffledCiclas);
  }, []);
/*
  const ciclas = [
    {
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
    }
  ]
  */

  const handleClick = (cicla) => {
    props.onProductoSeleccionado(cicla);
  };

  return (
    <div>
      
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