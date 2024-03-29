import './App.css'
import '@fortawesome/fontawesome-free/css/all.css';
import Home from './components/routes/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Header from './components/header/Header'
import Admin from './components/routes/Admin/Admin'
import ProductosListar from './components/routes/Admin/Productos/ProductosListar'
import ProductosRegistrar from './components/routes/Admin/Productos/ProductosRegistrar'
import DetalleProducto from './components/routes/DetalleProducto'
import MasFotos from './components/routes/MasFotos'
import RegistrarUsuario from './components/routes/RegistrarUsuario'
import IniciarSesion from './components/routes/IniciarSesion'
import CategoriaLista from './components/routes/Admin/Categorias/CategoriaLista'
import FormCategoria from './components/routes/Admin/Categorias/FormCategoria'
import CaracteristicaLista from './components/routes/Admin/Caracteristicas/CaracteristicaLista'
import FormCaracteristica from './components/routes/Admin/Caracteristicas/FormCaracteristica'

import CategoriasLista from './components/categorias/CategoriasLista'
import UsuariosListar from './components/routes/Admin/Usuarios/UsuariosListar'
import ReservasHacer from './components/routes/Admin/Reservas/ReservasHacer';



function App() {
  return (
    <>
      <Header />
      <Routes>

        {/*Home del site */}
        <Route path='/' element={<Home />} />

        {/*Registro de usuarios */}
        <Route path='/signup' element={<RegistrarUsuario />} />

        {/*Inicio de sesión de usuarios */}
        <Route path='/login' element={<IniciarSesion />} />

        {/*Sección admin*/}
        <Route path='/admin' element={<Admin />}>
          {/*Administración de productos*/}
          <Route path='productos'  >
            <Route index element={<ProductosListar />} />
            <Route path='registrar' element={<ProductosRegistrar />} />
          </Route>
          {/*Administración de categorías*/}
          <Route path='categorias'  >
            <Route index element={<CategoriaLista />} />
            <Route path='registrar' element={<FormCategoria />} />

          </Route>


          {/*Administración de características*/}
          <Route path='caracteristicas'  >
            <Route index element={<CaracteristicaLista />} />
            <Route path='registrar' element={<FormCaracteristica />} />
          </Route>



          {/*Administración de lista usuarios*/}
          <Route path='usuarios'  >
            <Route index element={<UsuariosListar />} />
          </Route>

        </Route>

        {/*Administración de reservas*/}
        <Route path='/reservas' element={<ReservasHacer />} />


        {/*Detalle de producto*/}
        <Route path='/productos/:id' element={<DetalleProducto />} />
        <Route path='/masFotos' element={<MasFotos />} />
        <Route path='categorias/:categoria' element={<CategoriasLista />} />

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
