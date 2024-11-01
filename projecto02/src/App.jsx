import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import LoginPage  from './pages/LoginPage'


import ProtectedRoutes from './ProtectedRoutes'
import RouterApp from './RouterApp'
export default function App() { 



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