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




  //logica para que al apretar una miniatura se pase a grande
  const [imagenPrincipal, setImagenPrincipal] = useState('');
  const handleClickMiniatura = (urlImg) => {
    setImagenPrincipal(urlImg);
  };
  //esto busca la primer imagen que se renderizara al entrar
  useEffect(() => {
    if (datosProducto && datosProducto.imagenes && datosProducto.imagenes.length > 0) {
      setImagenPrincipal(datosProducto.imagenes[0].urlImg);
    }
  }, [datosProducto]);



  //esto para la "fullScreen" de la imagen , no se si funcionara con todo 
  const handleFullScreen = () => {
    const element = document.querySelector('.imagen-Detalle-Producto');

    if (element) {
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
    }
  };
  const handleExitFullScreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  };





  useEffect(() => {
    const traerProducto = async () => {
      const endPoint = 'productos/buscarPorId/' + id;
      const url = urlBackend + endPoint;

      try {
        const response = await axios.get(url);
        setDatosProducto(response.data);
      } catch (error) {
        setErrorConsumeService(error.response.data.message);
      }
    }

    traerProducto();

  }, []);

  return (

    <>

      {datosProducto ?

        <div className="detalle-producto-overlay">

          <article className="detalle-producto-card">
            <div className='detalle-izquierda-card'>

              <div className='barra-titulo'>
                <Link to='/'>
                  <button className='button-detalle'>
                    {<IoIosArrowBack />}</button>
                </Link>
                <div className='centradorTitulo'>
                  <span className='titulo-nombre-bici'>
                    {datosProducto.nombre}
                  </span>
                </div>
              </div>
              <div className='fotos-detalle'>

                <img className='imagen-Detalle-Producto' src={imagenPrincipal} alt="" onClick={() => handleFullScreen()} />

                <div className="miniaturas">
                  {datosProducto.imagenes.map((imagen, index) => {
                    if (index !== 0 && index <= 4) {
                      return (
                        <img
                          key={index}
                          className='miniatura'
                          src={imagen.urlImg}
                          alt=""
                          onClick={() => handleClickMiniatura(imagen.urlImg)}
                        />
                      );
                    } else {
                      return null;
                    }
                  })}
                </div>
              </div>

            </div>

            <div className='detalle-derecha-card'>
              <div className='detalle-descripcion-producto'>
                <h2 className='titulo'>Descripción del producto</h2>
                <p>{datosProducto.descripcion}</p>
                <p>asd</p>
              </div>

              <div>
                <h2 className="titulo-426">Características</h2>
                <h2 className='oculto titulo'>Características</h2>
                <div className="caracteristicas-container">
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

              <div>
                <h2 className='titulo'>Calendario</h2>
                <h1>AQUI CALENDARIO???????????????</h1>
                <img
                  src="https://www.calendargratis.com/wp-content/uploads/2023/09/Calendario-Enero-y-Febrero-2024-1536x994.png"
                  alt=""
                  style={{ width: '50vw', height: 'auto' }}
                />              </div>
            </div>
          </article>
        </div>
        : <div>
          <span><b>Sin detalle</b></span>
          <hr />
          <span>{errorConsumeService}</span>
        </div>
      }

      {/* esto es para que  el botón de "Atrás" pero solo si la imagen está en pantalla completa*/}
      {document.fullscreenElement && (
        <button onClick={handleExitFullScreen}>Atrás</button>
      )}

    </>
  )
}

export default DetalleProducto