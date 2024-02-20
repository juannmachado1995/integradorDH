import './App.css'
import Buscador from './components/buscador'
import Electricas from './components/FiltroBusqueda/Electricas'
import Capacidad from './components/FiltroBusqueda/Capacidad'
import Talla from './components/FiltroBusqueda/Talla'
import CardBicicleta from './components/CardBicicleta'
import CarrucelFotos from './components/CarrucelFotos'
function App() {

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

export default App
