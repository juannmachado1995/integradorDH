import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { getObjSession, modulosRedireccion, urlBackend } from '../../utils/global.context';
import axios from 'axios';

const msgError1 = 'Existe un error en los datos de la reserva, por favor elíge una bicicleta y asegúrate de seleccionar los días en los que quieres reservarla, luego selecciona  el botón “Iniciar Reserva”.';
const msgError2 = 'Existe un error con las fechas de reserva, fecha inicial de reserva [';
const msgError2_1 = '] fecha final de reserva ['; 
const msgError2_2 = '].'; 
const msgError3 = 'Existe un error con los datos de la bicicleta';
const msgError4 = 'La bicicleta no se puede reservar en las fechas seleccionadas';
const msgError5 = 'Esta bicicleta no existe';

const ConfirmarReserva = () => {
  const [errorConsumeService, setErrorConsumeService] = useState(null);
  const [okConsumeService, setOkConsumeService] = useState(null);
  const [datosProducto, setDatosProducto] = useState(null);

  const [reservaParams, setReservaParams] = useSearchParams();

  const navigate = useNavigate();

  useEffect(()=>{
    const idProducto = reservaParams.get('id');
    const fecha1 = reservaParams.get('fecha1');
    const fecha2 = reservaParams.get('fecha2');

    /*Se verifica que exista una sesión activa */
    const objSessionTmp = getObjSession();

    if(objSessionTmp === null){
      const urlLogin = '/login?modulo=' + modulosRedireccion.confirmarReservas +
                       '&id=' + idProducto +  
                       '&fecha1=' + encodeURIComponent(fecha1) + 
                       '&fecha2=' + encodeURIComponent(fecha2);
      navigate(urlLogin)
    }else{
      if(isValidBookingValues(idProducto, fecha1, fecha2)){
        console.log('a llamar cadena promise')
        consultarProductoPorId(idProducto)
          .then(() =>{
            buscarReservaPorProducto(idProducto, fecha1, fecha2);
        })
          .catch(() => {
            setErrorConsumeService(msgError5);
        });
      }
    }
  },[]);

  /*Se genera validación de los datos de la reserva dado que los parametros son manipulables por url*/
  const isValidBookingValues = (idProducto, fecha1, fecha2) =>{
    /*Se valida que se los tres parametros para la reserva vengan informados*/
    if(idProducto === null || fecha1 === null || fecha2 === null){
      setErrorConsumeService(msgError1);
      return false;
    }

    /*Se valida que el id del producto sea un valor entero*/
    if(Number.isNaN(Number.parseInt(idProducto))){
      setErrorConsumeService(msgError3);
      return false;
    }

    /*Se valida que las fechas informadas tengan el formato válido y sean fechas lógicas*/
    if(!isValidDate(fecha1) || !isValidDate(fecha2)){
      setErrorConsumeService(msgError2 + fecha1 + msgError2_1 + fecha2 + msgError2_2);
      return false;
    }

    return true
  };

  const isValidDate= (date) =>{
    /*Valida que el formato de fecha sea AAAA-mm-dd */
    const DATE_REGEX = /^(\d{4})(\-)(0[1-9]|1[012])\2(0[1-9]|[1-2]\d|3[01])$/;
    
    if(!date.match(DATE_REGEX)){
      return false;
    }

    const valuesDate = date.split('-');

    const year  = parseInt(valuesDate[0]);
    const month = parseInt(valuesDate[1]);
    const day   = parseInt(valuesDate[2]);

    const monthDays = new Date(year, month, 0).getDate();

    if(day > monthDays){
      return false;
    }

    return true;

  };

  const consultarProductoPorId = async (idProducto) =>{
    const endPoint = 'productos/buscarPorId/' + idProducto;
    const url = urlBackend + endPoint;

    return axios.get(url);
  };

  const buscarReservaPorProducto = async (idProducto, fecha1, fecha2) => {
    const endPoint = 'reservas/buscarReservaPorProducto'
    const url = urlBackend + endPoint;

    const payload = {
      fechaInicio: fecha1,
      fechaFin: fecha2,
      producto_id: idProducto,
      correo: 'correo@correo.com'
    }

    try{
      const response = await axios.post(url, payload);
    }catch(error){
      console.log('error buscarReservaPorProducto:', error.response);
      setErrorConsumeService(msgError4);
    }
  }

  return (
    <div className='container-middle'>
        <h1>Confirmar Reserva</h1>
        {(errorConsumeService || okConsumeService) ?
          <div>
            {errorConsumeService &&
            <div>
              <h3>Error</h3>
              <span>{errorConsumeService}</span>
            </div>
            }
            {okConsumeService &&
            <div>
              <h3>Error</h3>
              <span>{errorConsumeService}</span>
            </div>
            }
          </div>
          :
          <span>todo nice</span>
        }
    </div>
  )
}

export default ConfirmarReserva;