import React, { useState } from "react";
import './IniciarSesion.css';
import Form1 from "../Form1/Form1";
import {pathIcons} from '../../components/utils/global.context';
import { useNavigate } from "react-router-dom";
/*

*/
/*Form genérico */
const IniciarSesion = () =>{

    /*Estados de validación de campos*/
    const [errorCorreo, setErrorCorreo] = useState('');

    /*Estados de resultado de consumo de servicio */
    const [errorConsumeService, setErrorConsumeService] = useState('');
    const [okConsumeService, setOkConsumeService] = useState('');

    /*Navigate para redireccionar a home en caso de login exitoso */
    const navigate = useNavigate();

    const inputs= [
        {
            idInput: 'correoId',
            textInput: 'Correo electrónico',
            nameInput: 'correo',
            placeHolderInput: 'Email con el que te registraste',
            typeInput: 'email',
            maxLengthInput: '80',
            required: 'required',
            errorTextInput: ''
        },
        {
            idInput: 'contrasenaId',
            textInput: 'Contraseña:',
            nameInput: 'contrasena',
            placeHolderInput: '',
            typeInput: 'password',
            maxLengthInput: '10',
            required: 'required',
            errorTextInput: ''
        },
    ];
    
    const validateForm = (form) =>{
        setErrorCorreo('');

        let isValidForm = true;
        let expRegularCorreo = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    
        
        /*Validación de Correo */
        if(!expRegularCorreo.test(form.correo)){
            setErrorCorreo('Correo inválido');
            isValidForm = false;
        }

        return isValidForm;
    };

    const consumeService = (form) =>{
        return [true, 'Usuario o contraseña incorrectos'];
    } 

    const handleForm = (e) =>{
        setOkConsumeService('');
        setErrorConsumeService('');
        const formRegistrar = e.target;
        const formRegistrarData = new FormData(formRegistrar);
        const formJson = Object.fromEntries(formRegistrarData.entries());

        const isValidForm = validateForm(formJson);

        if(isValidForm){
            const [isConsumeServiceOk, msgErrorService] = consumeService(formJson);
            if(isConsumeServiceOk){
                formRegistrar.reset();
                navigate('/');
            }
            else{
                setErrorConsumeService(msgErrorService);
            }
        }
    };

    return (
        <div className="container-middle IniciarSesion-parent-center">
            <div className="IniciarSesion-main">
                <h1>Iniciar sesión</h1>
                <span>Para ingresar a tu cuenta por favor diligencia los siguientes datos:</span>
                <br/>
                <Form1 inputs={inputs} handleForm={handleForm} textSubmit='Iniciar sesión' iconSubmit={pathIcons.login}
                       textSuccesfulService={okConsumeService} textErrorService={errorConsumeService}
                />
                <br />
                
            </div>
        </div>
    )
}

export default IniciarSesion;