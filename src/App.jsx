import './App.css'
import Home from './components/Home'

import { Routes, Route } from 'react-router-dom'
import Admin from './components/Admin'
import VerMasFotos from './components/detalleProducto/VerMasFotos'
import MasFotos from './components/detalleProducto/MasFotos'

function App() {

  return (
    <>
    
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/masFotos' element={<MasFotos/>}/>
        <Route path='*' element={<h1>Página/ruta no encontrada</h1>} />
      </Routes>
    </>
  )
}

export default App
