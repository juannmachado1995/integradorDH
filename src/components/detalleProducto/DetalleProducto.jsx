import React, { useState } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import VerMasFotos from './VerMasFotos';
import { Link } from 'react-router-dom';

const DetalleProducto = ({ srcImagen, nombreBici, onClose }) => {

  const [mostrarFotos, setMostrarFotos] = useState(false);

  const handleMostrarFotos = () => {
    setMostrarFotos(true)
  };

  const handleCerrarFotos = () => {
    console.log("Cerrando fotos...");
    setMostrarFotos(false);
  };

  return (

    <>
      <div className='background-overlay mostrar'>
        <div className="detalle-producto-overlay mostrar">
          <article className="detalle-producto-card">
            <div className='detalle-izquierda-card'>
              <button onClick={onClose} className='button button-detalle'> {<IoIosArrowBack />}  Volver Atras</button>
              <span className='detalle-de-la-bici'>Detalles de la bicicleta</span>
              <span className='titulo-nombre-bici border-radius'>{nombreBici}</span>
              <img className='imagen-Detalle-Producto' src={srcImagen} alt="" />
              <Link to="/masfotos">
                <button className='button button-detalle'
                  onClick={handleMostrarFotos}>
                  Ver mas fotos +
                </button>
              </Link>
            </div>

            <div className='detalle-descripcion-producto'>
              <h2>Descripcion de producto</h2>
              <p>Cuadro: Monoscocca Carbon <br /> Horquilla: Monoscocca Carbon
                <br />  Cuadro: Monoscocca Carbon <br /> Horquilla: Monoscocca Carbon
                <br />  Cuadro: Monoscocca Carbon <br /> Horquilla: Monoscocca Carbon
                <br />  Cuadro: Monoscocca Carbon <br /> Horquilla: Monoscocca Carbon</p>
              <p>Cuadro: Monoscocca Carbon <br /> Horquilla: Monoscocca Carbon</p>
              <p>Cuadro: Monoscocca Carbon <br /> Horquilla: Monoscocca Carbon</p>
            </div>

          </article>
        </div>
        {mostrarFotos && <VerMasFotos srcImagen={srcImagen} nombreBici={nombreBici} onClose={handleCerrarFotos} />}
      </div>
    </>
  )
}

export default DetalleProducto