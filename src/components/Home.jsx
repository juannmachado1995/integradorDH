import React from 'react'
import Buscador from './formBuscador/Buscador'
import CarrucelFotos from './carrucelFotos/CarrucelFotos'
import Electricas from './FiltroBusqueda/Electricas'
import Capacidad from './FiltroBusqueda/Capacidad'
import Talla from './FiltroBusqueda/Talla'
import CardBicicleta from './cardCiclasHome/CardBicicleta'

const Home = () => {
  return (
    <>
    <Buscador />
    <CarrucelFotos />
    <div className='home'>
      <div className='filtro-izquierda'>
        <Electricas />
        <Capacidad />
        <Talla />
      </div>
      <CardBicicleta />
    </div>
  </>
  )
}

export default Home