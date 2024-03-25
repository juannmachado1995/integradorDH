import React, { useContext, useState, useEffect } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import VerMasFotos from './VerMasFotos';
import { Link, useParams } from 'react-router-dom';
import { ContextGlobal, urlBackend } from '../utils/global.context';
import './DetalleProducto.css'
import axios from 'axios';

const DetalleProducto = () => {

  const { id } = useParams();

  const [mostrarFotos, setMostrarFotos] = useState(false);

  const [datosProducto, setDatosProducto] = useState(null);

  const [errorConsumeService, setErrorConsumeService] = useState('');


  const handleMostrarFotos = () => {
    setMostrarFotos(true)
  };

  const handleCerrarFotos = () => {
    setMostrarFotos(false);
  };

  useEffect(()=>{
    const traerProducto = async () =>{
      const endPoint = 'productos/buscarPorId/' + id;
      const url = urlBackend + endPoint;

      try{
        const response = await axios.get(url);
        setDatosProducto(response.data);
      }catch(error){
          setErrorConsumeService(error.response.data.message);
      }
    }

    traerProducto();

  },[]);

  return (

    <>
      <div className='background-overlay mostrar container-middle'>
        {datosProducto?
        <div className="detalle-producto-overlay mostrar">
          <article className="detalle-producto-card">

            <div className='detalle-izquierda-card'>
              <div className='button-titulo'>
                <Link to='/'>
                  <button className='button button-detalle'> {<IoIosArrowBack />}Volver Atrás</button>
                </Link>
                <span className='titulo'>Detalles de la bicicleta</span>
              </div>

              <span className='titulo-nombre-bici'>{datosProducto.nombre}</span>
              <img className='imagen-Detalle-Producto' src={datosProducto.imagenes[0].urlImg} alt="" />
              <Link to="/masfotos">
                <button className='button button-detalle'
                  onClick={handleMostrarFotos}>
                  Ver más fotos
                </button>
              </Link>
            </div>

            <div className='detalle-derecha-card'>
              <div className='detalle-descripcion-producto'>
                <h2 className='titulo'>Descripcion de producto</h2>
                <p>{datosProducto.descripcion}</p>
                <p>asd</p>
              </div>


              <div>
                <h2 className="titulo-426">Características</h2>
                <div className="caracteristicas-container titulo">
                  <div className='titulo'><h2 className='oculto titulo'>Características</h2>  </div>
                  <div className='iconos-caracteristicas'>
                    {datosProducto.caracteristicas.map(caracteristica => (
                      <div className='container-big-item' key={caracteristica.id} title={caracteristica.nombre}>
                        <div className="caracteristica-item">
                          <img src={caracteristica.icono} alt="Icono" className="caracteristica-icon" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
        :<div>
          <span><b>Sin detalle</b></span>
          <hr />
          <span>{errorConsumeService}</span>
        </div>
        }
        {mostrarFotos && <VerMasFotos srcImagen={data.imgBici} nombreBici={data.nombreBici} onClose={handleCerrarFotos} />}
      </div>
    </>
  )
}

export default DetalleProducto