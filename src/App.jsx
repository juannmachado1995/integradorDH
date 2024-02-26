import './App.css'
import Buscador from './components/formBuscador/Buscador'
import Electricas from './components/FiltroBusqueda/Electricas'
import Capacidad from './components/FiltroBusqueda/Capacidad'
import Talla from './components/FiltroBusqueda/Talla'
import CardBicicleta from './components/cardCiclasHome/CardBicicleta'
import CarrucelFotos from './components/carrucelFotos/CarrucelFotos'
import Home from './components/Home'
import Footer from './components/Footer/footer'



function App() {

  return (
    <>
    <p>header</p>
      <Home />

       {/* Este es el componente que debe ir en adminpage porque contiene en formulario con el
        contaier con los botones agregar y listar producto*:  <ProductManagement></ProductManagement>*/}
    
    
      <Footer></Footer>
    </>
  )
}

export default App
