import './App.css'
import Home from './components/routes/Home'

import { Routes, Route } from 'react-router-dom'
import Admin from './components/routes/Admin/Admin'
import MasFotos from './components/routes/MasFotos'
import Header from './components/header/Header'
import Footer from './components/Footer/Footer'
import DetalleProducto from './components/routes/DetalleProducto'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/productos/:id' element={<DetalleProducto/>} />
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
