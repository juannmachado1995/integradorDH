import React, { useState } from 'react'
import Buscador from '../components/formBuscador/Buscador'
import CarrucelFotos from '../components/carrucelFotos/CarrucelFotos'
import Electricas from '../components/FiltroBusqueda/Electricas'
import Capacidad from '../components/FiltroBusqueda/Capacidad'
import Talla from '../components/FiltroBusqueda/Talla'
import CardBicicleta from '../components/cardCiclasHome/CardBicicleta'
import DetalleProducto from '../components/detalleProducto/DetalleProducto'
import Categorias from '../components/categorias/Categorias'

const Home = () => {


  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [mostrarDetalleProducto, setMostrarDetalleProducto] = useState(false);

  const handleProductoSeleccionado = (producto) => {
    setProductoSeleccionado(producto);
    setMostrarDetalleProducto(true)
  };
  const handleCerrarDetalle = () => {
    console.log("Cerrando detalle...");
    setMostrarDetalleProducto(false);
  };




  return (
    <>
      <Buscador />
      <Categorias />
     {/* <CarrucelFotos />
      
    <div className='home'>
      <div className='filtro-izquierda'>
        <Electricas />
        <Capacidad />
        <Talla />
      </div>
  */}


      <CardBicicleta onProductoSeleccionado={handleProductoSeleccionado} />

      {mostrarDetalleProducto && (
        <DetalleProducto
          srcImagen={productoSeleccionado.imgBici}
          nombreBici={productoSeleccionado.nombreBici}
          onClose={handleCerrarDetalle}
        />)}
    </>
  )
}

export default Home