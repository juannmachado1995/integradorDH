import React from 'react'
import { BiSearch } from 'react-icons/bi';
const Buscador = () => {
    return (
        <>
            <form className='form-buscador'>
                <label htmlFor="buscador"></label>
                <div className="search-container">
                    <BiSearch className="search-icon" />
                    <input className="forms-busca-tu-bici border-radius"
                        type="text"
                        placeholder="Busca tu bici favorita"
                        id="nombre"
                    />
                </div>
            </form>
        </>
    )
}

export default Buscador