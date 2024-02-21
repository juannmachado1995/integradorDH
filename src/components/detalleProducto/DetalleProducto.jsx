import React from 'react'

const DetalleProducto = ({srcImagen,nombreBici}) => {

    console.log(nombreBici)
  return (

    <>
        <button>Volver Atras</button>
        <span>Detalles de la bici</span>
        <h2>{nombreBici}</h2>
        <img src={srcImagen} alt="" />
        <button>Ver mas fotos</button>
        
    </>
  )
}

export default DetalleProducto