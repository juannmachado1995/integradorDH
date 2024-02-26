import './App.css'
import Home from './Routes/Home'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<h1>Página/ruta no encontrada</h1>} />
      </Routes>
    </>
  )
}

export default App
