import './App.css'
import Home from './components/Home'

import { Routes, Route } from 'react-router-dom'
import Admin from './components/Admin'

function App() {

  return (
    <>
    
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='*' element={<h1>Página/ruta no encontrada</h1>} />
      </Routes>
    </>
  )
}

export default App
