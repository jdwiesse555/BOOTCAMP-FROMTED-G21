import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import LoginPage  from './pages/LoginPage'
import { TanquesPage } from './pages/TanquesPage'
import Tanque  from './pages/Tanque'



export default function App() { 
  return (
    <BrowserRouter>

      <Routes>
      <Route >

        <Route path='/' element={<LoginPage  />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/Tanques' element={<TanquesPage />} />
        <Route path='/Tanques/:id' element={<Tanque />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}