import React, { useState } from 'react'

const Electricas = () => {

    const [opciones, setOpciones] = useState({
        urbana: false,
        plegable: false,
        montana: false,
        carretera: false,
        carga: false
    });

    const handleChange = (event) => {
        const { name, checked } = event.target;
        setOpciones(prevState => ({
            ...prevState,
            [name]: checked
        }));
    };


    return (
        <>
            <div className='formulario-filtro'>
                <span className='titulo-filtro border-radius'>Eléctricas</span>
                <form className='formulario-filtro-verde'>
                    <label>
                        <input
                            type="checkbox"
                            name="urbana"
                            checked={opciones.urbana}
                            onChange={handleChange}
                        />
                        Urbana
                    </label>
                    <br />
                    <label>
                        <input
                            className='border-radius'
                            type="checkbox"
                            name="plegable"
                            checked={opciones.plegable}
                            onChange={handleChange}
                        />
                        Plegable
                    </label>
                    <br />
                    <label>
                        <input
                            type="checkbox"
                            name="montana"
                            checked={opciones.montana}
                            onChange={handleChange}
                        />
                        Montaña
                    </label>
                    <br />
                    <label>
                        <input
                            type="checkbox"
                            name="Carretera"
                            checked={opciones.Carretera}
                            onChange={handleChange}
                        />
                        Carretera
                    </label>
                    <br />
                    <label>
                        <input
                            type="checkbox"
                            name="Carga"
                            checked={opciones.Carga}
                            onChange={handleChange}
                        />
                        Carga
                    </label>

                </form>
            </div>
        </>
    )
}

export default Electricas