import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Erro404 from './pages/Erro404'
import Home from './pages/Home'
import Carrinho from './pages/Carrinho'
import Login from './pages/Login'
import Perfil from './pages/Perfil'
import Cadastro from './pages/Cadastro'
import Hardware from './pages/Hardware'
import Perifericos from './pages/Perifericos'
import CelularesTab from './pages/CelularesTab'
import Computadores from './pages/Computadores'
import FinalizarCompra from './pages/FinalizarCompra'
import Games from './pages/Games'
import ConfCompra from './pages/ConfCompra'


export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Carrinho" element={<Carrinho />} />
        <Route path="Cadastro" element={<Cadastro />} />
        <Route path="ConfCompra" element={<ConfCompra />} />
        <Route path="Hardware" element={<Hardware />} />
        <Route path="Perifericos" element={<Perifericos />} />
        <Route path="Games" element={<Games />} />
        <Route path="CelularesTab" element={<CelularesTab />} />
        <Route path="Computadores" element={<Computadores />} />
        <Route path="Perfil" element={<Perfil />} />
        <Route path="FinalizarCompra" element={<FinalizarCompra />} />
        <Route path="Login" element={<Login />} />
        <Route path="*" element={<Erro404 />} />
      </Routes>
    </BrowserRouter>
  );
}