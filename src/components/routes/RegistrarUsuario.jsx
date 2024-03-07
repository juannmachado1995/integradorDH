import React from "react";
import './RegistrarUsuario.css';
import Form1 from "../Form1/Form1";
/*

*/
/*Form genérico */
const RegistrarUsuario = () =>{
    const inputs= [
        {
            idInput: 'identificacionId',
            textInput: '* DNI/Pasaporte/CC:',
            nameInput: 'identificacion',
            placeHolderInput: 'Este campos puede ser alfanumérico',
            typeInput: 'text',
            maxLengthInput: '20',
            required: 'required',
            errorTextInput: ''
        },
        {
            idInput: 'nombreId',
            textInput: '* Nombre:',
            nameInput: 'nombre',
            placeHolderInput: 'Este campo solo admite letras',
            typeInput: 'text',
            maxLengthInput: '50',
            required: 'required',
            errorTextInput: ''
        },
        {
            idInput: 'apellidoId',
            textInput: '* Apellido:',
            nameInput: 'apellido',
            placeHolderInput: 'Este campo solo admite letras',
            typeInput: 'text',
            maxLengthInput: '50',
            required: 'required',
            errorTextInput: ''
        },
        {
            idInput: 'correoId',
            textInput: '* Correo electrónico:',
            nameInput: 'correo',
            placeHolderInput: 'email@email.com',
            typeInput: 'email',
            maxLengthInput: '80',
            required: 'required',
            errorTextInput: ''
        },
        {
            idInput: 'telefonoId',
            textInput: '* Telefono:',
            nameInput: 'telefono',
            placeHolderInput: 'Este campo solo admite nmúmeros',
            typeInput: 'number',
            maxLengthInput: '',
            required: 'required',
            errorTextInput: ''
        },
        {
            idInput: 'contrasena1Id',
            textInput: '* Contraseña:',
            nameInput: 'contrasena1',
            placeHolderInput: '10 caracteres',
            typeInput: 'password',
            maxLengthInput: '10',
            required: 'required',
            errorTextInput: ''
        },
        {
            idInput: 'contrasena2Id',
            textInput: '* Confirmar contraseña:',
            nameInput: 'contrasena2',
            placeHolderInput: 'Repite y asegúrate que es la misma contraseña',
            typeInput: 'password',
            maxLengthInput: '10',
            required: 'required',
            errorTextInput: ''
        }
    ];

    const handleForm = (e) =>{
        const formRegistrar = e.target;
        const formRegistrarData = new FormData(formRegistrar);
        const formJson = Object.fromEntries(formRegistrarData.entries());
        console.log(formJson);
    }

    return (
        <div className="container-middle">
            <h1>Registro de usuario nuevo</h1>
            <span>Para poder rentar nuestros productos, debes diligenciar los siguientes datos:</span>
            <Form1 inputs={inputs} handleForm={handleForm} textSubmit='Registrar' />
            <br />
            <b>Los campos marcados con * son obligatorios</b>
        </div>
    )
}

export default RegistrarUsuario;