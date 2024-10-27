import { BrowserRouter, Route, Routes } from 'react-router-dom'

import BaseLayout from './layouts/BaseLayout'
import HomePage from './pages/HomePage'
import NuevaPeliculaPage from './pages/NuevaPeliculaPage'
import EditarPeliculaPage from './pages/EditarPeliculaPage'
import VerPeliculaPage from './pages/VerPeliculaPage'

import { Toaster } from 'sonner'

const App = () => {
  return (
    <BrowserRouter>
      <Toaster richColors position="top-right" />
 
      <Routes>
        <Route path='/' element={<BaseLayout />}>
          {/* DONE: RUTA PARA LISTAR UNA PELICULA */}
          <Route path='/' element={<HomePage />} />
          {/* TODO: RUTA PARA RECUPERAR UNA PELICULA */}
          <Route path='/nuevo' element={<NuevaPeliculaPage />} />
          {/* TODO: RUTA PARA CREAR UNA PELICULA */}
          <Route path='/ver/:id' element={<VerPeliculaPage />} />
          <Route path='/editar/:id' element={<EditarPeliculaPage />} />
          {/* TODO: RUTA PARA EDITAR UNA PELICULA */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App