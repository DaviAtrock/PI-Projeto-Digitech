import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


function ProfilePage() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
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

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // O usuário está autenticado, você pode acessar as informações do usuário aqui
        setUser(user);
      } else {
        // O usuário não está autenticado, redirecione para a página de login
        navigate('/login');
      }
    });

    return () => {
      // Remova o observador do estado de autenticação ao desmontar o componente
      unsubscribe();
    };
  }, [navigate]);

  const handleLogout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      // Redirecionar para a página de login após o logout
      navigate('/login');
    } catch (error) {
      console.log('Erro ao realizar logout:', error);
    }
  };

  if (!user) {
    return (
      <div>
        <Navbar />
        <p>Usuário não autenticado. Redirecionando para a página de login...</p>
        {/* Não é necessário adicionar a lógica de redirecionamento aqui */}
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <h1>Perfil</h1>
      <h2>Informações Pessoais</h2>
      <p>Nome: {user.displayName}</p>
      <p>Endereço: {user.address}</p>
      <p>Número de telefone: {user.phoneNumber}</p>
      <p>E-mail: {user.email}</p>
      <img src={user.photoURL} alt="Foto de perfil" />

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
      <p>Endereço de entrega: {user.deliveryAddress}</p>
      <p>Opções de envio: Entrega Expressa</p>

      <button onClick={handleLogout}>Logout</button>

      <Footer />
    </div>
  );
}

export default ProfilePage;
