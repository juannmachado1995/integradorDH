import React from 'react'

const DetalleProducto = ({ srcImagen, nombreBici, onClose }) => {

  

  return (

    <>
      <div className="detalle-producto-overlay mostrar">
        <article className="detalle-producto-card">
          <div className='detalle-izquierda-card'>
            <button onClick={onClose} className='button'>Volver Atras</button>
            <span className='detalle-de-la-bici'>Detalles de la bici</span>
            <text className='titulo-nombre-bici border-radius'>{nombreBici}</text>
            <img className='imagen-Detalle-Producto' src={srcImagen} alt="" />
            <button className='button'>Ver mas fotos</button>
          </div>

          <div>
            <h2>Descripcion de producto</h2>
            <p>Cuadro: Monoscocca Carbon <br/> Horquilla: Monoscocca Carbon</p>
          </div>
          
        </article>
      </div>
    </>
  )
}

export default DetalleProducto