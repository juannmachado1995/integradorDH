import React, { useState } from 'react'
import './formBuscador.css'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
import { pathIcons, urlBackend } from '../utils/global.context';
import axios from 'axios';

const labelDayWeek =[
    'Dom',
    'Lun',
    'Mar',
    'Mié',
    'Jue',
    'Vie',
    'Sab'
];

const labelMonth =[
    'ene',
    'feb',
    'mar',
    'abr',
    'may',
    'jun',
    'jul',
    'ago',
    'sep',
    'oct',
    'nov',
    'dic'
];
const Buscador = () => {
    const [rangoFechas, setRangoFechas] = useState('');
    const [rangoFechasServicio, setRangoFechasServicio] = useState([]);
    const [activarCalendario, setActivarCalendario] = useState(false);

    const rangoHandle = (value, event) =>{
        let fecha1 = new Date(value[0]);
        fecha1 = labelDayWeek[fecha1.getDay()] + ', ' + fecha1.getDate() + ' ' + labelMonth[fecha1.getMonth()];
        let fecha2 = new Date(value[1]);
        fecha2 = labelDayWeek[fecha2.getDay()] + ', ' + fecha2.getDate() + ' ' + labelMonth[fecha2.getMonth()];
        setRangoFechas((fecha1 +' - ' + fecha2));
        setRangoFechasServicio([new Date(value[0]), new Date(value[1])]);
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        const formIniciarSesion = e.target;
        const formIniciarSesionData = new FormData(formIniciarSesion);
        const formJson = Object.fromEntries(formIniciarSesionData.entries());

        console.log(formJson);

        //consumeService(formJson, formIniciarSesion);
        
    }

    const consumeService = async (formJson, formHTML) =>{

        const endPoint = 'productos/??????';
        const url = urlBackend + endPoint;

        const params = new URLSearchParams();
        params.append('nombre', formJson.nombre_producto);
        params.append('fechas', rangoFechasServicio);

        try{
            const response = await axios.post(url, params);
            formHTML.reset();
            //setContexto({...contexto, sesionActiva: true});
        }catch(error){
            console.log(error.response.data);
        }
    } 

    return (
        <>
            <div className='container-buscador'>
                <h1 className='titulo-slogan'>Encontrá la bicicleta ideal para cada viaje.</h1>
                <form className='form-buscador' onSubmit={handleSubmit}>
                    <input className="forms-busca-tu-bici"
                        type="text"
                        id="nombre"
                        placeholder='Nombre de producto'
                        name='nombre_producto'
                    />
                    <div></div>
                    <div className='buscador-seccion-rango-fechas' 
                         onClick={() => (setActivarCalendario(!activarCalendario))}>
                        <img src={pathIcons.calendario} alt='Buscar' />
                        <input id='id_fechas' type='text' name='rango_fechas' value={rangoFechas} readOnly={true} 
                        placeholder='Fecha inicio - Fecha fin'
                        />
                    </div>
                    <button type="submit" name='submitForm'>
                        <img src={pathIcons.lupa} alt='Buscar' />
                        Buscar
                    </button>
                </form>
                <div className={'buscador-seccion-calendario ' + 
                     (activarCalendario? 'calendario-activo' : '')}>
                    <Calendar showDoubleView={true}  locale='es'
                              showNeighboringMonth={false}
                              selectRange={true} returnValue='range' 
                              onChange={rangoHandle}
                              minDate={new Date()}
                            />
                </div>
            </div>
        </>
    )
}

export default Buscador