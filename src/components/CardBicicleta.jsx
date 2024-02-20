import React from 'react';

const CardBicicleta = () => {
  
  const ciclas = [
    {
      nombreBici:'Haibike Bicicleta Eléctrica Adventr FS 9',
      imgBici: 'https://i.imgur.com/OFuVyJt.png'
    },
    {
      nombreBici:'Wilier Bicicleta Eléctrica Triestina Hybrid GRX812',
      imgBici: 'https://i.imgur.com/oO2sILV.png'
    }
    ,
    {
      nombreBici:'Bianchi Bicicleta Eléctrica E-Spillo Classic G Altus',
      imgBici: 'https://i.imgur.com/370InV6.png'
    }
    ,
    {
      nombreBici:'Haibike Bicicleta Eléctrica MTB Alltrail',
      imgBici: 'https://i.imgur.com/IccTsb0.png'
    }
    ,
    {
      nombreBici:'Youin Bicicleta Eléctrica Plegable Dakar',
      imgBici: 'https://i.imgur.com/kSLWt3a.png'
    }
    ,
    {
      nombreBici:'Winora Bicicleta Eléctrica Tria X9 Wave',
      imgBici: 'https://i.imgur.com/UfRt2hz.png'
    }
    ,
    {
      nombreBici:'Bianchi Bicicleta Eléctrica Gravel E-Impulso Ultegra RD-R8000 2021',
      imgBici: 'https://i.imgur.com/Ou8g9TW.png'
    }
    ,
    {
      nombreBici:'Montana Bikes Bicicleta Eléctrica Carretera Gavia',
      imgBici: 'https://i.imgur.com/fNgTMbJ.png'
    }
  ]
  
  return (
    <div className='div-card-producto'>
      {ciclas.map((cicla, index) => (
        <article className='card-producto-home' key={index}>
          <img className='image-ciclas-home' src={cicla.imgBici} alt={cicla.nombreBici} />
          <span>{cicla.nombreBici}</span>
        </article>
      ))}
    </div>
  )
}

export default CardBicicleta