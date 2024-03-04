import './App.css'
import Home from './components/routes/Home'

import { Routes, Route } from 'react-router-dom'
import Admin from './components/routes/Admin/Admin'
import VerMasFotos from './components/detalleProducto/VerMasFotos'
import MasFotos from './components/detalleProducto/MasFotos'
import Header from './components/header/Header'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/masFotos' element={<MasFotos/>}/>
        <Route path='*' element={
          <div className='container-middle'><h1>Página/ruta no encontrada</h1></div>
        } />
      </Routes>
      <Footer />
    </>
  )
}

export default App
