import React, { useContext, useState, useEffect } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import VerMasFotos from './VerMasFotos';
import { Link, useParams } from 'react-router-dom';
import { ContextGlobal, urlBackend } from '../utils/global.context';
import './DetalleProducto.css'
import axios from 'axios';

const DetalleProducto = () => {

  const { contexto } = useContext(ContextGlobal);

  const { id } = useParams();
  const url = urlBackend + 'productos/' + id;

  /*En las pruebas con backend, se pueden habilitar y probar estas lineas o cambiar por axios a gusto*/
  /*const {data, error} = useFetchEffect(url);*/
  /*mientra se consume el back, nos traemos el array con la info para probar*/
  /*Posteriormente data será lo que devuelva el llamado al back, mientras se emula con el array*/
  const data = contexto.arrayCiclas[+id - 1];
  

  const [mostrarFotos, setMostrarFotos] = useState(false);
  //se inlcuye
  const [caracteristicas, setCaracteristicas] = useState([]);
  const [caracteristicasProducto,setCaracteristicasProducto] = useState([])

  const handleMostrarFotos = () => {
    setMostrarFotos(true)
  };

  const handleCerrarFotos = () => {
    console.log("Cerrando fotos...");
    setMostrarFotos(false);
  };



  // se incliye este para la solicitud para obtener características para el container
  useEffect(() => {

    const fetchCaracteristicas = async () => {
      try {
        const response = await axios.get('http://localhost:8080/caracteristicas/listar');
        setCaracteristicas(response.data);
      } catch (error) {
        console.error('Error al obtener características:', error);
      }
    };

    fetchCaracteristicas();
  }, []);

  console.log("prpooooooooooooo",data);

  return (

    <>
      <div className='background-overlay mostrar container-middle'>
        <div className="detalle-producto-overlay mostrar">
          <article className="detalle-producto-card">

            <div className='detalle-izquierda-card'>
              <div className='button-titulo'>
                <Link to='/'>
                  <button className='button button-detalle'> {<IoIosArrowBack />}Volver Atrás</button>
                </Link>
                <span className='titulo'>Detalles de la bicicleta</span>
              </div>

              <span className='titulo-nombre-bici'>{data.nombreBici}</span>
              <img className='imagen-Detalle-Producto' src={data.imgBici} alt="" />
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
                <p>{data.descripcion}</p>
                <p>asd</p>
              </div>


              <div>
                <h2 className="titulo-426">Características</h2>
                <div className="caracteristicas-container titulo">
                  <div className='titulo'><h2 className='oculto titulo'>Características</h2>  </div>
                  <div className='iconos-caracteristicas'>
                    {caracteristicas.map(caracteristica => (
                      <div className='container-big-item' key={caracteristica.id}>
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
        {mostrarFotos && <VerMasFotos srcImagen={data.imgBici} nombreBici={data.nombreBici} onClose={handleCerrarFotos} />}
      </div>
    </>
  )
}

export default DetalleProducto