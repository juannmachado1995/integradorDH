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

  const handleProductoSeleccionado = (producto) => {
    setProductoSeleccionado(producto);
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
      {productoSeleccionado && (
        <DetalleProducto
          srcImagen={productoSeleccionado.imgBici}
          nombreBici={productoSeleccionado.nombreBici}
        />)}
  </>
  )
}

export default Home