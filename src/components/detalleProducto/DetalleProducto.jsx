import React from 'react'

const DetalleProducto = () => {

const nombreBici = "bici"
const imgBici = 'https://i.imgur.com/OFuVyJt.png'
  return (

    <>
        <button>Volver Atras</button>
        <span>Detalles de la bici</span>
        <h2>{nombrebici}</h2>
        <img src={imgBici} alt="" />
        <button>Ver mas fotos</button>
        
    </>
  )
}

export default DetalleProducto