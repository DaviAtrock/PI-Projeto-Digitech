// import { useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Layout from './components/Layout'
import Erro404 from './pages/Erro404'
import Home from './pages/Home'
// import UserContext from './contexts/UserContext'
import Carrinho from './pages/Carrinho'
import Login from './pages/Login'
import Perfil from './pages/Perfil'
import Cadastro from './pages/Cadastro'
import SobreNos from './pages/SobreNos'
import Pesquisa from './pages/Pesquisa'
import Hardware from './pages/Hardware'
import Perifericos from './pages/Perifericos'

export default function App() {
  // const { logado } = useContext(UserContext)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Carrinho" element={<Carrinho />} />
        <Route path="Perfil" element={<Perfil />} />
        <Route path="Login" element={<Login />} />
        <Route path="*" element={<Erro404 />} />
        <Route path="Cadastro" element={<Cadastro />} />
        <Route path="SobreNos" element={<SobreNos />} />
        <Route path="Pesquisa" element={<Pesquisa />} />
        <Route path="Hardware" element={<Hardware />} />
        <Route path="Perifericos" element={<Perifericos />} />
      </Routes>
    </BrowserRouter>
  )
}