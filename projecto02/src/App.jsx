import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import LoginPage  from './pages/LoginPage'
import { TanquesPage } from './pages/TanquesPage'
import { MetricasPage } from './pages/MetricasPage'
import Tanque  from './pages/Tanque'
import Metrica  from './pages/Metrica'
import UserPage  from './pages/UserPage'
import  NewUsuario from './pages/NewUsuario'
import {  useState } from "react"
import ProtectedRoutes from './ProtectedRoutes'
import RouterApp from './RouterApp'
export default function App() { 
let paso = true


  return (
    <BrowserRouter>

      <Routes>
      <Route >

        <Route path='/' element={<LoginPage  />} />
        <Route path='/*' element={
          <ProtectedRoutes>
            <RouterApp/>
          </ProtectedRoutes>
        } />

        
        </Route>
      </Routes>
    </BrowserRouter>
  )
}