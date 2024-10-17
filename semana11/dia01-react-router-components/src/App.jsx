import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage'
import  LayoutBase  from './layouts/LayoutBase'

export default function App() { 
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<LayoutBase/>}>

        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}