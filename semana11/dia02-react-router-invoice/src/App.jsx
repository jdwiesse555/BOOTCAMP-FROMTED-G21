import { BrowserRouter, Route, Routes } from 'react-router-dom'

import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import InvoicesPage from './pages/InvoicesPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/invoices' element={<InvoicesPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App