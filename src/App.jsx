import './App.css'
import Home from './components/routes/Home'

import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Header from './components/header/Header'
import Admin from './components/routes/Admin/Admin'
import ProductosListar from './components/routes/Admin/Productos/ProductosListar'
import ProductosRegistrar from './components/routes/Admin/Productos/ProductosRegistrar'
import DetalleProducto from './components/routes/DetalleProducto'
import MasFotos from './components/routes/MasFotos'
import RegistrarUsuario from './components/routes/RegistrarUsuario'
import IniciarSesion from './components/routes/IniciarSesion'

function App() {

  return (
    <>
      <Header />
      <Routes>
        {/*Home del site */}
        <Route path='/' element={<Home/>}/>

        {/*Registro de usuarios */}
        <Route path='/signup' element={<RegistrarUsuario />}/>

        {/*Inicio de sesión de usuarios */}
        <Route path='/login' element={<IniciarSesion />}/>

        {/*Sección admin*/}
        <Route path='/admin' element={<Admin/>}>
          {/*Administración de productos*/}
          <Route path='productos'  >
            <Route  index element={<ProductosListar/>} />
            <Route path='registrar' element={<ProductosRegistrar/>} />
          </Route> 
          {/*Administración de categorías*/}
          <Route path='categorias'  >
            <Route  index element={<div>Listar categorías</div>} />
            <Route path='registrar' element={<div>Registrar categoría</div>} />
          </Route> 
          
          {/*Administración de características*/}
          <Route path='caracteristicas'  >
            <Route  index element={<div>Listar características</div>} />
            <Route path='registrar' element={<div>Registrar característica</div>} />
          </Route> 
        </Route>

        {/*Detalle de producto*/}
        <Route path='/productos/:id' element={<DetalleProducto/>} />
        <Route path='/masFotos' element={<MasFotos/>}/>

        {/*Rutas no encontradas*/}
        <Route path='*' element={
          <div className='container-middle'><h1>Página/ruta no encontrada</h1></div>
        } />
      </Routes>
      <Footer />
    </>
  )
}

export default App
