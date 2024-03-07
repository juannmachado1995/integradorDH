import React from "react";
import './Form1.css';
import Input1 from "../Input1/Input1";

/*Form genérico tipo 1*/
const Form1 = ({inputs, handleForm, textSubmit}) =>{

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(e.target);
        handleForm(e);
    }

    return (
        <form onSubmit={handleSubmit}>
            {
                inputs.map(
                    (item, idx) =>(
                        <Input1 key={idx + 1}  idInput={item.idInput} textInput={item.textInput} nameInput={item.nameInput}
                                placeHolderInput={item.placeHolderInput} typeInput={item.typeInput} maxLengthInput={item.maxLengthInput}
                                required={item.required} errorTextInput={item.errorTextInput}
                        />
                    )
                )
            }
            <button type="submit" name='submitForm'>{textSubmit}</button>
        </form>
    )
}

export default Form1;