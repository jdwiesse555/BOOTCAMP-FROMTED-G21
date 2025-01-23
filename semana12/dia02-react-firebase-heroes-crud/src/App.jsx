import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NewHeroPage from './pages/NewHeroPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/hero-new' element={<NewHeroPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App