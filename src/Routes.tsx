import { Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home'
import Pratos from './Pages/Pratos'

export const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/pratos" element={<Pratos />} />
  </Routes>
)
