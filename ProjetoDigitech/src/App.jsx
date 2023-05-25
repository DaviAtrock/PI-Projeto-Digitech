// import { useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Layout from './components/Layout'
import Erro404 from './pages/Erro404'
import Home from './pages/Home'
// import UserContext from './contexts/UserContext'
import Carrinho from './pages/Carrinho'
import Login from './pages/Login'

export default function App() {
  // const { logado } = useContext(UserContext)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Carrinho" element={<Carrinho />} />
        <Route path="Login" element={<Login />} />
        <Route path="*" element={<Erro404 />} />
      </Routes>
    </BrowserRouter>
  )
}