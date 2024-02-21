import React , {useState} from 'react'
import Buscador from './formBuscador/Buscador'
import CarrucelFotos from './carrucelFotos/CarrucelFotos'
import Electricas from './FiltroBusqueda/Electricas'
import Capacidad from './FiltroBusqueda/Capacidad'
import Talla from './FiltroBusqueda/Talla'
import CardBicicleta from './cardCiclasHome/CardBicicleta'
import DetalleProducto from './detalleProducto/DetalleProducto'

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
    <CarrucelFotos />
    <div className='home'>
      <div className='filtro-izquierda'>
        <Electricas />
        <Capacidad />
        <Talla />
      </div>
      <CardBicicleta onProductoSeleccionado={handleProductoSeleccionado} />
      </div>
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