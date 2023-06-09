import React, { useState } from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


function ProfilePage() {
  const [orderHistory, setOrderHistory] = useState([
    {
      id: 1234,
      status: 'Concluído',
      total: 100.0
    },
    {
      id: 5678,
      status: 'Em andamento',
      total: 50.0
    }
  ]);

  return (
    <div>
    <Navbar />
      <h1>Perfil</h1>
      <h2>Informações Pessoais</h2>
      <p>Nome: John Doe</p>
      <p>Endereço: 123 Main Street</p>
      <p>Número de telefone: (123) 456-7890</p>
      <p>E-mail: john.doe@example.com</p>
      <img src="https://via.placeholder.com/150" alt="Foto de perfil" />

      <h2>Histórico de Pedidos</h2>
      <ul>
        {orderHistory.map(order => (
          <li key={order.id}>
            Pedido #{order.id} - Status: {order.status} - Total: R$ {order.total}
          </li>
        ))}
      </ul>

      <h2>Informações de Pagamento</h2>
      <p>Método de pagamento: Cartão de Crédito</p>

      <h2>Preferências de Envio</h2>
      <p>Endereço de entrega: 123 Main Street</p>
      <p>Opções de envio: Entrega Expressa</p>
      <Footer />
    </div>
  );
}

export default ProfilePage;
