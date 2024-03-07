import React from 'react'

/*Input genérico tipo 1*/
const Input1 = ({idInput, textInput, nameInput, placeHolderInput, typeInput, maxLengthInput, required, errorTextInput}) => {
  return (
        <label>
            <b>{textInput}</b>
            {typeInput === 'number' && 
                <input id={idInput} type='number' name={nameInput} placeholder={placeHolderInput} required={required} />
            }
            {typeInput === 'text' && 
                <input id={idInput} type='text' name={nameInput} placeholder={placeHolderInput} maxLength={maxLengthInput} required={required} />
            }
            {typeInput === 'email' && 
                <input id={idInput} type='email' name={nameInput} placeholder={placeHolderInput} maxLength={maxLengthInput} required={required} />
            }
            {typeInput === 'password' && 
                <input id={idInput} type='password' name={nameInput} placeholder={placeHolderInput} maxLength={maxLengthInput} required={required} />
            }
            <div className='Input1-error-text'>
               <span>{errorTextInput}</span>
            </div>
        </label>
  )
}

export default Input1;