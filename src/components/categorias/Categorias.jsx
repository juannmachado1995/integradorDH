import React from 'react'
import './categorias.css'

const Categorias = () => {

    const categorias = [
        {
            nombre: 'Ruta',
            imgCategoria: 'https://img.freepik.com/fotos-premium/icono-blanco-negro-bicicleta-moderna-sombra_1057389-35988.jpg?w=740'
        },
        {
            nombre: 'Mountain Bike',
            imgCategoria: 'https://img.freepik.com/fotos-premium/icono-blanco-negro-bicicleta-moderna-sombra_1057389-35988.jpg?w=740'
        },
        {
            nombre: 'Urbana',
            imgCategoria: 'https://img.freepik.com/fotos-premium/icono-blanco-negro-bicicleta-moderna-sombra_1057389-35988.jpg?w=740'
        },
       

    ]

    return (
        <div className='categorias-wrapper'>
            <h3 className='titulos'> Nuestras Categorías</h3>
            <div className='categorias-conteiner'>

                {categorias.map((categoria, index) => (
                    <article className='card-categoria' key={index}>
                        <img className='img-categoria' src={categoria.imgCategoria} alt={categoria.nombre} />
                        <span className='nombre-categoria'>{categoria.nombre}</span>
                    </article>
                ))}

            </div>
        </div>
    )
}

export default Categorias