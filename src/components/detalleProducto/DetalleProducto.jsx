import React from 'react'

const DetalleProducto = ({ srcImagen, nombreBici, onClose }) => {

  return (

    <>
      <div className="detalle-producto-overlay">
        <article className="detalle-producto-card">
          <button onClick={onClose} className='button'>Volver Atras</button>
          <span>Detalles de la bici</span>
          <h2>{nombreBici}</h2>
          <img className='imagen-Detalle-Producto' src={srcImagen} alt="" />
          <button className='button'>Ver mas fotos</button>
        </article>
      </div>
    </>
  )
}

export default DetalleProducto