import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import LoginPage  from './pages/LoginPage'
import { TanquesPage } from './pages/TanquesPage'
import { MetricasPage } from './pages/MetricasPage'
import Tanque  from './pages/Tanque'
import Metrica  from './pages/Metrica'
import UserPage  from './pages/UserPage'
import  NewUsuario from './pages/NewUsuario'

export default function App() { 
  return (
    <BrowserRouter>

      <Routes>
      <Route >

        <Route path='/' element={<LoginPage  />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/Tanques' element={<TanquesPage />} />
        <Route path='/Metricas' element={<MetricasPage />} />
        <Route path='/Metricas/:id' element={<Metrica />} />
        <Route path='/Tanques/:id' element={<Tanque />} />
        <Route path='/Usuarios' element={<UserPage />} />
        <Route path='/usuario-new' element={<NewUsuario />} />
        
        </Route>
      </Routes>
    </BrowserRouter>
  )
}